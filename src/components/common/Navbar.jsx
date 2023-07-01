import React from "react";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import sidebar from "../../assets/sidebar.svg";
import basket from "../../assets/basket.svg";
import Vector from "../../assets/Vector.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  // bg-[#1A064F]
  return (
    <div className=" bg-black flex flex-row  border-b-[1px] border-opacity-50 border-b-white items-center justify-between px-[15px] py-[15px]">
      {/* left side */}
      <div className=" flex flex-row lg:px-[25px] items-center gap-2 ">
      <Link to='/'>
        <img
          src={logo}
          className="w-[45px] h-[45px]"
          alt="Logo not able to show"
        />
        </Link>
        <Link to='/'>
        <h2 className="text-white font-[700] text-[18px] font-walsheimCon leading-normal">
          Educrat
        </h2>
        </Link>
        <div className="hidden lg:flex flex-row pl-[40px]  items-center gap-4">
          {/* lines image */}
          <div className="flex flex-col skew-x-[-15deg]  items-center gap-[0.35rem]">
            <div className="w-[15px] h-[2px] bg-[#00FF84]"></div>
            <div className="w-[20px] h-[2px] bg-[#00FF84]"></div>
            <div className="w-[15px] h-[2px] bg-[#00FF84]"></div>
          </div>
          <div className="font-walsheimMed text-[#00FF84] hidden md:block  text-[15px] leading-[26px]">
            Explore
          </div>
        </div>
      </div>

      {/* middle section */}
      <div className=" hidden xl:flex flex-row gap-[2rem] ">
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] text-white">Home</div>
          <img src={Vector} alt="Vector" />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] text-white">Courses</div>
          <img src={Vector} alt="Vector" />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] text-white">Events</div>
          <img src={Vector} alt="Vector" />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] text-white">Blog</div>
          <img src={Vector} alt="Vector" />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] text-white">Pages</div>
          <img src={Vector} alt="Vector" />
        </div>
        <div className="flex flex-row cursor-pointer items-center">
          <div className="text-[15px] text-white">Contact</div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-row gap-4 items-center">
        <img
          src={search}
          className="w-[20px] h-[20px]"
          alt="Logo not able to show"
        />
        <img
          src={basket}
          className="w-[20px] h-[20px]"
          alt="Logo not able to show"
        />
        <img
          src={sidebar}
          className="w-[20px] h-[20px] lg:hidden"
          alt="Logo not able to show"
        />
        <Link to="/login"  className="lg:block hidden">
          <button className="text-[15px] hidden lg:block font-walsheimCon leading-[26px] text-white">
            Log In
          </button>
        </Link>
        <Link to="/signup"  className="lg:block hidden">
          <div className="bg-white w-[120px] hidden lg:flex h-[40px]  flex-row items-center justify-center rounded-[8px]">
            <button className="text-[15px] font-walsheimCon leading-[26px] text-black">
              Sign Up
            </button>
          </div>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
