import React from "react";
import logo from "../../assets/logo.svg";
import Search from "../../assets/Search.jsx";
import Sidebar from "../../assets/Sidebar.jsx";
import Basket from "../../assets/Basket.jsx";
import Vector from "../../assets/Vector.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "../Auth/ProfileDropDown";

const Navbar = ({ theme }) => {
  // fetching current state from the slice
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  // bg-[#1A064F]
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black border-b-white" : "bg-white border-b-black"
      }   flex flex-row  border-b-[1px] border-opacity-50  items-center justify-between px-[15px] py-[15px]`}
    >
      {/* left side */}
      <div className=" flex flex-row lg:px-[25px] items-center gap-2 ">
        <Link to="/">
          <img
            src={logo}
            className="w-[45px] h-[45px]"
            alt="Logo not able to show"
          />
        </Link>
        <Link to="/">
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } font-[700] text-[18px] font-walsheimCon leading-normal`}
          >
            Educrat
          </h2>
        </Link>
        <div className="hidden lg:flex flex-row pl-[40px]  items-center gap-4">
          {/* lines image */}
          <div className="flex flex-col skew-x-[-15deg]  items-center gap-[0.35rem]">
            <div
              className={`w-[15px] h-[2px] ${
                theme === "dark" ? "bg-[#00FF84]" : "bg-[#6440FB]"
              }`}
            ></div>
            <div
              className={`w-[15px] h-[2px] ${
                theme === "dark" ? "bg-[#00FF84]" : "bg-[#6440FB]"
              }`}
            ></div>
            <div
              className={`w-[15px] h-[2px] ${
                theme === "dark" ? "bg-[#00FF84]" : "bg-[#6440FB]"
              }`}
            ></div>
          </div>
          <div
            className={`font-walsheimMed ${
              theme === "dark" ? "text-[#00FF84]" : "text-[#6440FB]"
            }   hidden md:block  text-[15px] leading-[26px]`}
          >
            Explore
          </div>
        </div>
      </div>

      {/* middle section */}
      <div
        className={`hidden xl:flex flex-row gap-[2rem] ${
          theme === "dark" ? "text-white" : "text-black"
        } `}
      >
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] ">Home</div>
          {/* <img src={Vector}  alt="Vector" /> */}
          <Vector color={`${theme === "dark" ? "white" : "black"}`} />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px]">Courses</div>
          <Vector color={`${theme === "dark" ? "white" : "black"}`} />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px] ">Events</div>
          <Vector color={`${theme === "dark" ? "white" : "black"}`} />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px]">Blog</div>
          <Vector color={`${theme === "dark" ? "white" : "black"}`} />
        </div>
        <div className="flex flex-row cursor-pointer gap-[0.5rem] items-center">
          <div className="text-[15px]">Pages</div>
          <Vector color={`${theme === "dark" ? "white" : "black"}`} />
        </div>
        <div className="flex flex-row cursor-pointer items-center">
          <div className="text-[15px] ">Contact</div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-row gap-4 items-center">
        <Search
          className="w-[20px] h-[20px]"
          color={`${theme === "dark" ? "white" : "black"}`}
        />
        {user && user?.accountType !== "Instructor" && (
          <Link to="/dashboard/cart" className="relative">
            <Basket
              className="w-[20px] h-[20px]"
              color={`${theme === "dark" ? "white" : "black"}`}
            />
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        )}
        <Sidebar
          className="lg:hidden"
          alt="Logo not able to show"
          color={`${theme === "dark" ? "white" : "black"}`}
        />
        {token === null && (
          <Link to="/login" className="lg:block hidden">
            <button
              className={`text-[15px] hidden lg:block font-walsheimCon leading-[26px] ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Log In
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup" className="lg:block hidden">
            <div
              className={` w-[120px] hidden lg:flex h-[40px]  flex-row items-center justify-center rounded-[8px]
            ${theme === "dark" ? "text-black bg-white " : "text-white bg-black"}`}
            >
              <button className="text-[15px] font-walsheimCon leading-[26px] ">
                Sign Up
              </button>
            </div>
          </Link>
        )}
        {token !== null && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Navbar;
