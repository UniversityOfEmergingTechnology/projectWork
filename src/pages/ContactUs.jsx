import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import location from "../assets/contact-us/location.svg";
import circle from "../assets/circle1.svg";
import mail from "../assets/contact-us/mail.svg";
import phone from "../assets/phone2.png";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import FAQItem from "../components/Contact/FAQItem.jsx";
import { apiConnector } from "../services/apiconnector";
import { contactusEndpoint } from "../services/apis";
import { useForm } from "react-hook-form";
import {toast} from 'react-hot-toast'

const faqData = [
  {
    question: "What courses do you offer for students?",
    answer:
      "At UnimTech, we offer a wide range of courses tailored for students in various disciplines, including programming, data science, cybersecurity, and cloud computing. Our courses are designed to provide comprehensive knowledge and practical skills to help students excel in their chosen fields.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "Enrolling in a course at UnimTech is easy! Simply browse our course catalog, choose the course you're interested in, and click on the 'Enroll Now' button. Follow the instructions to complete the enrollment process, and you'll gain access to the course materials and resources.",
  },
  {
    question: "Are the courses self-paced or instructor-led?",
    answer:
      "We offer both self-paced and instructor-led courses to cater to different learning preferences. Our self-paced courses allow you to learn at your own pace, accessing the course materials and completing assignments at your convenience. For instructor-led courses, you'll have scheduled lectures and interactions with the instructor and fellow students.",
  },
  {
    question: "Do you provide certificates upon course completion?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certificate of completion from UnimTech. Our certificates are recognized and can be used to showcase your skills and knowledge to potential employers or academic institutions.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "The prerequisites for each course may vary. Some courses require a basic understanding of programming concepts, while others may require prior knowledge in specific domains. You can find the prerequisites listed on the course details page. If you have any specific questions, feel free to reach out to our support team.",
  },
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const TouchData = [
  {
    img: location,
    data: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
  },
  {
    img: phone,
    data: "+(1) 123 456 7890.",
  },
  {
    img: mail,
    data: "hi@Uniemtech.com",
  },
];

const center = {
  lat: 	-37.809811,
  lng: 	144.965195,
};
const ContactUs = () => {
  //   AIzaSyAbDLor5DBBfrNKD0FmiRR8PU1zeSPoD6E

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const submitContactForm = async (data) => {
    const toastId = toast.loading("Loading...")
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Email Res - ", res)
      setLoading(false);
      toast.success('Your feedback has been sent successfully')
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
      toast.error('Not able to send your feedback')
    }
    toast.dismiss(toastId)
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <>
      <Navbar theme={"dark"} />
      <LoadScript googleMapsApiKey="AIzaSyAbDLor5DBBfrNKD0FmiRR8PU1zeSPoD6E">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* You can add your markers here */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <div className="mt-[100px] mb-[50px] w-[70%] mx-auto">
        {/* contact us section */}
        <div className="flex flex-row gap-[100px] mb-[100px]">
          <div className="flex flex-col w-[40%] gap-[10px] ">
            <h3 className="text-[#140342] leading-normal text-[24px] font-walsheimMed">
              Keep in Touch With Us
            </h3>
            <p className="text-[#4F547B] text-[15px] leading-normal font-normal font-walsheimReg">
            Stay connected with us
            </p>
            <div className="flex flex-col mt-[50px] gap-[50px]">
              {TouchData.map((touch, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-[25px]"
                >
                  <div className=" w-[80px] rounded-[100%] p-5 flex items-center justify-center bg-[#E5F0FD] ">
                    <img className="w-[40px] h-[40px]" src={touch.img} alt="" />
                  </div>

                  <p className="text-[#4F547B] w-[280px] text-[15px] leading-normal font-normal font-walsheimReg">
                    {touch.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[10px] ">
            <h3 className="text-[#140342] leading-normal text-[24px] font-walsheimMed">
              Send a Message{" "}
            </h3>
            <p className="text-[#4F547B] text-[15px] leading-normal font-normal font-walsheimReg">
            Contact us by sending a message:
            </p>
            <form
              onSubmit={handleSubmit(submitContactForm)}
              className="flex flex-col mt-[80px] gap-[50px]"
            >
              <div className="flex flex-row gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="name" className="lable-style">
                    Name
                  </label>
                  <input
                    placeholder="Name"
                    className="border-[1px] font-walsheimReg text-darkblue w-[300px] p-3 h-[35px] border-[#DDD]"
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                      Please enter your name.
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="email" className="lable-style">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-[1px] font-walsheimReg text-darkblue w-[300px] p-3 h-[35px] border-[#DDD]"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                      Please enter your Email address.
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="lable-style" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="border-[1px] font-walsheimReg text-darkblue p-3 border-[#DDD]"
                  rows={7}
                  cols={30}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Message.
                  </span>
                )}
              </div>

              <button
                disabled={loading}
                type="submit"
                className={`self-start px-[55px] py-[21px]
                ${
                  !loading &&
                  "transition-all duration-200 hover:scale-95 hover:shadow-none"
                } 
                 text-white bg-[#6440FB] font-walsheimCon duration-300 hover:scale-90 rounded-lg
              `}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* faq section */}
      <div className="bg-[#F7F8FB] py-[100px] flex flex-col">
        <h1 className="text-[30px] text-center font-walsheim font-[700] leading-normal">
          Frequently Asked Questions.
        </h1>
        <p className="font-walsheimReg leading-[26px] font-[400] text-[15px] text-center">
        Find answers to commonly asked questions below:
        </p>
        <div className="flex mt-[50px] flex-col gap-[10px] items-center">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isSelected={selectedQuestion === index}
              onSelected={() =>
                setSelectedQuestion(selectedQuestion === index ? null : index)
              }
            />
          ))}
        </div>
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
