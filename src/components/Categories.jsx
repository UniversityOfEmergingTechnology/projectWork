import React from "react";
import one from "../assets/categories/one.svg";
import two from "../assets/categories/two.svg";
import three from "../assets/categories/three.svg";
import fourth from "../assets/categories/fourth.svg";
import fifth from "../assets/categories/fifth.svg";
import sixth from "../assets/categories/sixth.svg";
import "swiper/css";
import "swiper/css/pagination"; // import styles for pagination
import "swiper/css/navigation"; // import styles for navigation
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import './Categories.css'

SwiperCore.use([Autoplay, Pagination, Navigation]);
// Import Swiper styles


const categoriesData = [
  {
    img: one,
    title: "Design Creative",
    courses: "573+ Courses ",
  },
  {
    img: two,
    title: "Sales Marketing",
    courses: "565+ Courses ",
  },
  {
    img: three,
    title: "Development IT",
    courses: "126+ Courses ",
  },
  {
    img: fourth,
    title: "Engineering Architecture",
    courses: "35+ Courses ",
  },
  {
    img: fifth,
    title: "Personal Development",
    courses: "908+ Courses",
  },
  {
    img: sixth,
    title: "finance accounting",
    courses: "129+ Courses ",
  },
  {
    img: one,
    title: "Design Creative",
    courses: "573+ Courses ",
  },
  {
    img: two,
    title: "Sales Marketing",
    courses: "565+ Courses ",
  },
  {
    img: three,
    title: "Development IT",
    courses: "126+ Courses ",
  },
  {
    img: fourth,
    title: "Engineering Architecture",
    courses: "35+ Courses ",
  },
  {
    img: fifth,
    title: "Personal Development",
    courses: "908+ Courses",
  },
  {
    img: sixth,
    title: "finance accounting",
    courses: "129+ Courses ",
  },
];

const Categories = () => {
    
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[#140342] text-center text-[30px] leading-normal font-walsheimCon">
        Top Categories
      </h3>
      <p className="text-[15px] font-normal leading-[26px] font-walsheimReg text-center ">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
      {/* className="flex flex-row items-center justify-center gap-4" */}
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay
        className="w-[100%] h-[100%]  cursor-pointer "
        pagination={{ clickable: true }} // add pagination
        navigation // add navigation
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {categoriesData.map((category, index) => (
          <SwiperSlide
            key={index}
          >
            <div className="w-[180px] h-[240px] lg:w-[220px] xl:w-[290px] lg:h-[240px] flex flex-col gap-4 items-center justify-center group hover:bg-black duration-300  rounded-[8px] bg-[#EEF2F6] ">
              <div className="w-24 h-24  flex items-center justify-center  bg-white rounded-full">
                <img src={category.img} className="w-12 h-12" alt="" />{" "}
              </div>
              <h3 className="text-[#140342] break-words group-hover:text-white capitalize font-walsheimCon text-[17px] leading-[26px]">
                {category.title}
              </h3>
              <p className="text-[13px] group-hover:text-white font-walsheimReg leading-normal font-normal">
                {category.courses}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
