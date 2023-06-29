import React from "react";
import cross from "../assets/cross.svg";
import Group from "../assets/Group.png";
import banner from "../assets/banner2.mp4";
import "./Hero.css";
import group2 from "../assets/group2.svg";
import group3 from "../assets/group3.svg";
import badge from "../assets/badge.svg";
import cap from "../assets/cap.svg";
import play from "../assets/play.svg";
import read from "../assets/read.svg";

const infoArray = [
  {
    img: cap,
    descr: "Over 12 million students",
  },
  {
    img: play,
    descr: "More than 60,000 courses",
  },
  {
    img: read,
    descr: "Learn anything online",
  },
];

const Hero = () => {
  return (
    <div className="bg-[#1A064F] pt-[90px] lg:pt-[150px]  pb-[50px] px-[15px] lg:px-[50px] flex flex-col gap-4 relative">
      {/* absolute positioned elements */}
      <img
        src={cross}
        alt="Cross"
        className="w-[16px] absolute left-[50px] top-[40px] opacity-50 h-[16px]"
      />
      <img
        src={Group}
        alt="Cross"
        className="w-[16px] absolute left-[20px] top-[410px] opacity-50 h-[16px]"
      />
      <img
        src={group2}
        alt="Cross"
        className="w-[16px] absolute left-[320px] top-[360px] opacity-50 h-[16px]"
      />
      <img
        src={group3}
        alt="Cross"
        className="w-[16px] absolute left-[320px] top-[147px] opacity-50 h-[16px]"
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col lg:w-[50%]  gap-4">
          <h2 className="text-white text-[30px] lg:text-[55px] capitalize lg:leading-[80px] font-walsheim leading-[43px] font-[700]">
            Learn New Skills Online with Top{" "}
            <span className="text-[#00FF84] underline">Educators</span>{" "}
          </h2>

          <h5 className="text-[15px] leading-[26px] font-walsheimReg text-white ">
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies.
          </h5>

          <div className="flex  flex-col gap-4 lg:flex-row">
            <button className="bg-[#6440FB] py-[21px] lg:px-[55px] px-[30px] font-bold cursor-pointer rounded-[8px] text-white">
              Join For Free
            </button>
            <button className=" text-[#00FF84] border-[1px] lg:px-[55px]  border-[#00FF84] py-[21px] px-[30px] font-bold cursor-pointer rounded-[8px] ">
              Find Courses
            </button>
          </div>
        </div>

        {/* video */}
        <div className="flex flex-col gap-4 lg:w-[50%] items-center relative">
          {/* absolute */}

          <div className="blob-video-wrapper">
            <video className="blob-video" src={banner} autoPlay loop muted />
          </div>
          <div
            className="flex h-[90px] w-[80%] relative py-[20px] px-[30px] flex-col bg-white rounded-[8px] "
            style={{ boxShadow: "0px 40px 30px 0px rgba(25, 25, 46, 0.04)" }}
          >
            <h3 className="text-[#6440FB] text-[16px] font-walsheimMed leading-normal ">
              Congrats!
            </h3>
            <h3 className="font-walsheimReg text-[15px] leading-[26px] opacity-70">
              Your Admission Completed
            </h3>
            <img
              src={badge}
              alt="badge"
              className="absolute top-[-15px] left-[-50px]"
            />
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row gap-4 hidden ">
        {infoArray.map((info, index) => (
          <div className="flex flex-row gap-2" key={index}>
            <img src={info.img} alt="" />
            <div className="text-[15px] font-walsheimMed font-[400] leading-normal text-white">{info.descr}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
