import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./HomePage.css";
import wave from '../assets/wave4.png'
import WhyFutureLearn from "../components/WhyFutureLearn";
import LearnCourses from "../components/LearnCourses";
import LearnFrom from "../components/LearnFrom";
import Categories from '../components/Categories'
import WhatPeopleSay from "../components/WhatPeopleSay";

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
      {/* why future learn */}
      <div className="mt-[50px] w-[90%] mx-auto lg:mt-0">
        <WhyFutureLearn/>
      </div>
      {/* Why learn with our courses */}
      <div className="mt-[100px] bg-black opacity-90">
        <LearnCourses/>
      </div>
      {/* top categories */}
      <div className="py-[100px]  lg:px-[100px]  bg-white">
        <Categories/>
      </div>
      {/* what people say */}
      <div className="py-[100px] bg-[#6440FB] px-[50px]  lg:px-[100px] ">
        <WhatPeopleSay/>
      </div>
      {/* learn from anywhere */}
      <div className="py-[100px] lg:px-[100px]  bg-[#EEF2F6]">
        <LearnFrom/>
      </div>

    </div>
  );
};

export default HomePage;
