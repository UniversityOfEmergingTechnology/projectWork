import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import location from "../assets/contact-us/location.svg";
import circle from "../assets/circle1.svg";
import mail from "../assets/contact-us/mail.svg";
import phone from "../assets/phone2.png";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import FAQItem from "../components/Contact/FAQItem.jsx";

const faqData = [
  {
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
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
    data: "hi@educrat.com",
  },
];

const center = {
  lat: 34.0522,
  lng: -118.2437,
};
const ContactUs = () => {
  //   AIzaSyAbDLor5DBBfrNKD0FmiRR8PU1zeSPoD6E

  const [selectedQuestion, setSelectedQuestion] = useState(null);
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
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              tincidunt egetnvallis.
            </p>
            <div className="flex flex-col mt-[80px] gap-[50px]">
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
              Neque convallis a cras semper auctor. Libero id <br />
              faucibus nisl tincidunt egetnvallis.
            </p>
            <form className="flex flex-col mt-[80px] gap-[50px]">
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
                  />
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
                  />
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
                ></textarea>
              </div>

              <button
                type="submit"
                className="self-start px-[55px] py-[21px] text-white bg-[#6440FB] font-walsheimCon duration-300 hover:scale-90 rounded-lg"
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
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
