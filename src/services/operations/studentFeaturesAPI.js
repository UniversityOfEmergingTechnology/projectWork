import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";


const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

export async function buyCourse(
  token,
  courses,
  userDetails,
  navigate,
  dispatch
) {
  const toastId = toast.loading("Loading...");
  var orderResponse;
  try {
    //initiate the order
    orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { courses },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }
    console.log("PRINTING orderResponse", orderResponse);
    toast.dismiss(toastId);
    //send successful wala mail
    const formData = {
      orderId: orderResponse.data.orderId,
      paymentId: orderResponse.data.paymentId,
      clientSecret: orderResponse.data.clientSecret,
      courses: courses,
      amount: orderResponse.data.amount,
    };
    return formData;
    //verifyPayment
  } catch (error) {
    console.log("PAYMENT API ERROR.....", error);
    toast.error("Could not make Payment");
  }
}

export async function sendPaymentSuccessEmail(response, token) {
  const { orderId, paymentId, clientSecret, courses, amount } = response;
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: orderId,
        paymentId: paymentId,
        amount: amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
  }
}

//verify payment
export async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment....");
  dispatch(setPaymentLoading(true));
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Payment Successful, you are addded to the course");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}
