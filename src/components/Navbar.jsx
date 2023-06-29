import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import sidebar from "../assets/sidebar.svg";
import basket from "../assets/basket.svg";

const Navbar = () => {
  return (
    <div className="bg-[#1A064F] flex flex-row  border-b-[1px] border-opacity-50 border-b-white items-center justify-between px-[15px] py-[15px]">
      {/* left side */}
      <div className=" flex flex-row items-center gap-2 ">
        <img
          src={logo}
          className="w-[45px] h-[45px]"
          alt="Logo not able to show"
        />
        <h2 className="text-white font-[700] text-[18px] font-walsheimCon leading-normal">
          Educrat
        </h2>
      </div>

      {/* right side */}
      <div className="flex flex-row gap-2">
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
          className="w-[20px] h-[20px]"
          alt="Logo not able to show"
        />
      </div>
    </div>
  );
};

export default Navbar;
