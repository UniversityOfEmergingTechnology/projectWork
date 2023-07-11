import React from "react";
import FutureCard from "./FutureCard";
import one from '../../assets/futureLearn/one.svg'
import two from '../../assets/futureLearn/two.svg'
import three from '../../assets/futureLearn/three.svg'
import fourth from '../../assets/futureLearn/fourth.svg'


// mock data

const futureLearnData = [
  {
    img: one,
    title: "Learn Anything",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    img: two,
    title: "Learn together",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    img: three,
    title: "Learn with experts",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
  {
    img: fourth,
    title: "Life time Access",
    description:
      "The latest design trends meet hand-crafted templates in Sassio Collection.",
  },
];

const WhyFutureLearn = () => {
  return (
    <div>
      <h2 className="text-[#140342] text-center font-walsheimCon font-[700] text-[30px]">
        Why FutureLearn?{" "}
      </h2>
      <h5 className="leading-[26px] font-walsheimReg text-[15px] text-[#4F547B] text-center">
      Embrace the Future with Future Learn
      </h5>
      {/* Cards container */}
      <div className="flex w-[100%] flex-wrap sm:gap-5 xl:flex-nowrap flex-row mt-[100px] items-center justify-center">
        {futureLearnData.map((card, index) => (

            <FutureCard key={index} card={card}></FutureCard>
        ))}
      </div>
    </div>
  );
};

export default WhyFutureLearn;
