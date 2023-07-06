import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  CardElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import {
  verifyPayment,
  sendPaymentSuccessEmail,
} from "../../services/operations/studentFeaturesAPI";

export default function CheckoutForm({ formData, token, dispatch, navigate }) {
  const stripe = useStripe();
  const elements = useElements();

  const { orderId, paymentId, clientSecret, courses, amount } = formData;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  //   console.log(message);
  // }, [stripe]);
  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US', // TODO: replace with your country code
        currency: 'usd', // TODO: replace with your currency
        total: {
          label: 'Demo total',
          amount: amount, // TODO: replace with your amount in smallest currency unit (e.g., cents)
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);


  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js hasn't yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }
  //   setIsLoading(true);

  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       // Make sure to change this to your payment completion page
  //       return_url: "http://localhost:3000/dashboard/enrolled-courses",
  //     },
  //   });

  //   // This point will only be reached if there is an immediate error when
  //   // confirming the payment. Otherwise, your customer will be redirected to
  //   // your `return_url`. For some payment methods like iDEAL, your customer will
  //   // be redirected to an intermediate site first to authorize the payment, then
  //   // redirected to the `return_url`.
  //   if(error){
  //     if (error.type === "card_error" || error.type === "validation_error") {
  //       setMessage(error.message);
  //     } else {
  //       setMessage("An unexpected error occurred.");
  //       toast.error("Error occured");
  //     }
  //   }
  //   else{
  //     try{
  //       await verifyPayment(formData, token, navigate, dispatch);
  //       await sendPaymentSuccessEmail(formData,amount,token );
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !elements.getElement(CardElement)) {
      // Stripe.js or Elements hasn't loaded yet, or the CardElement isn't ready.
      return;
    }
    setIsLoading(true);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: { email },
    });

    if (paymentMethodReq.error) {
      setMessage(paymentMethodReq.error.message);
      setIsLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: paymentMethodReq.paymentMethod.id,
      }
    );

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === "succeeded") {
      // Payment is successful
      try {
        await verifyPayment(formData, token, navigate, dispatch);
        await sendPaymentSuccessEmail(formData, token);
        // redirect after additional operations are done
        // window.location.href = "http://localhost:3000/dashboard/enrolled-courses";
      } catch (err) {
        // Handle the error
      }
    } else {
      setMessage("Payment failed");
    }

    setIsLoading(false);
  };

  // const paymentElementOptions = {
  //   layout: "tabs",
  // };
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  return (
    <div className="CheckoutForm">
    <h1 className="text-darkblue text-[50px] font-walsheimCon">Payment Gateway Using Stripe</h1>
      <form id="payment-form" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          value={email}
        />
        {paymentRequest && (
          <div>
            <PaymentRequestButtonElement options={{ paymentRequest }} />
            <p>Or pay with your credit card:</p>
          </div>
        )}
        <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />

        <button
          disabled={isLoading || !stripe || !elements}
          className="paymentButton"
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
