import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./HomePage.css";
import wave from '../assets/wave4.png'
import WhyFutureLearn from "../components/WhyFutureLearn";
import LearnCourses from "../components/LearnCourses";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* hero section */}
      <div className="relative flex flex-col">
        <Hero />
        <div className="wave-container lg:block hidden">
            <img src={wave} alt="" />
        </div>
      </div>
      {/* brands */}
      <div className="mt-[50px] w-[90%] mx-auto lg:mt-0">
        <WhyFutureLearn/>
      </div>
      {/* Why learn with our courses */}
      <div className="mt-[100px] bg-black opacity-90">
        <LearnCourses/>
      </div>

    </div>
  );
};

export default HomePage;
