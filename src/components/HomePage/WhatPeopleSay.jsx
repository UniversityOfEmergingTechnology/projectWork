import React from "react";

import "swiper/css";
import "swiper/css/pagination"; // import styles for pagination
import "swiper/css/navigation"; // import styles for navigation
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import comma from "../../assets/comma.svg";
import people from "../../assets/people.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const peopleData = [
  {
    title: "Great Work",
    desc: ` " I think Uniemtech is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. It was so satisfying I never found such content anywhere else." `,
    img: people,
    name: "Courtney Henry",
    post: "Web Designer",
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    img: people,
    name: "Alexandra Smith",
    post: "Digital Marketer",
  },
  {
    title: "Impressive Platform",
    desc: "Uniemtech offers an impressive platform with a seamless user experience. The wide range of courses, informative content, and interactive learning materials have greatly contributed to my professional development. Thank you, Uniemtech!",
    img: people,
    name: "John Davis",
    post: "Data Analyst",
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    img: people,
    name: "Emily Johnson",
    post: "Software Engineer",
  },
  {
    title: "Exceptional Learning Platform",
    desc: "Uniemtech provides an exceptional learning platform with high-quality courses and a supportive community. The interactive lessons, real-world projects, and valuable resources have made my learning journey enjoyable and rewarding.",
    img: people,
    name: "Michael Thompson",
    post: "Data Scientist",
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    img: people,
    name: "Emily Johnson",
    post: "Software Engineer",
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    img: people,
    name: "Alexandra Smith",
    post: "Digital Marketer",
  },
];

const WhatPeopleSay = () => {
  return (
    <div className=" flex flex-col gap-5">
      <h3 className="text-center text-[#00FF84] text-[30px] leading-normal font-normal font-walsheimCon">
        What People Say
      </h3>
      <p className="text-center font-walsheimReg text-[15px] leading-[26px] text-[400] text-white">
      Testimonials from Our Students
      </p>
      <Swiper
        spaceBetween={90}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay
        className="w-[100%] h-[100%] cursor-pointer "
        pagination={{ clickable: true }} // add pagination
        navigation // add navigation
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1084: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {peopleData.map((people, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 px-[20px] py-[30px]   rounded-[8px] bg-white">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-[#6440FB] text-[18px] font-normal leading-[36px] text-[400] font-walsheimMed">
                  {people.title}
                </h3>
                <img src={comma} alt="" />
              </div>
              <p className="text-[#140342] font-normal leading-[30px] font-walsheimReg">
                {people.desc}
              </p>
              <div className="flex flex-row gap-4">
                <img
                  className="w-[64px] h-[64px] rounded-full"
                  src={people.img}
                  alt=""
                />
                <div className="flex flex-col gap-1 justify-center">
                  <p className="text-[#140342] text-[15px] leading-normal font-[400] font-walsheimCon">
                    {people.name}
                  </p>
                  <p className="text-[13px] font-walsheimReg leading-normal font-[400]">
                    {people.post}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col gap-5 lg:mt-[100px] mt-[50px] lg:justify-between lg:flex-row">
        <div className="flex flex-col gap-1">
          <p className="text-[#00FF84] text-center text-[35px] leading-normal">
            <VisibilitySensor>
              {({ isVisible }) => (
                <CountUp end={isVisible ? 350000 : 0} duration={5} />
              )}
            </VisibilitySensor>
            +
          </p>
          <p className="text-white text-center text-[15px] leading-[26px] font-[400] font-walsheimReg">
            Students worldwide
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#00FF84] text-center text-[35px] leading-normal">
          <VisibilitySensor>
              {({ isVisible }) => (
                <CountUp end={isVisible ? 496000 : 0} duration={5} />
              )}
            </VisibilitySensor>
            +
          </p>
          <p className="text-white text-center text-[15px] leading-[26px] font-[400] font-walsheimReg">
            Total course views
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#00FF84] text-center text-[35px] leading-normal">
            <VisibilitySensor>
              {({ isVisible }) => (
                <CountUp end={isVisible ? 19000 : 0} duration={5} />
              )}
            </VisibilitySensor>
            +
          </p>
          <p className="text-white text-center text-[15px] leading-[26px] font-[400] font-walsheimReg">
            Five-star course reviews
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#00FF84] text-center text-[35px] leading-normal">
            <VisibilitySensor>
              {({ isVisible }) => (
                <CountUp end={isVisible ? 987000 : 0} duration={5} />
              )}
            </VisibilitySensor>
            +
          </p>
          <p className="text-white text-center text-[15px] leading-[26px] font-[400] font-walsheimReg">
            Students community
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
