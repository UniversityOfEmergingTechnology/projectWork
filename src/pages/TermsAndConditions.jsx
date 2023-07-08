import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar theme={"dark"} />

      <div className="flex flex-col w-[60%] mx-auto items-center justify-center">
        <div className="flex flex-col mt-[100px] items-center justify-center">
          <h1 className="text-[40px] leading-normal   font-[700] font-walsheim">
            Terms & Conditions
          </h1>
          <p className="text-[#4F547B] font-walsheimReg font-[400] capitalize leading-[36px] text-[17px]">
            We’re on a mission to deliver engaging, curated courses at a
            reasonable price.
          </p>
        </div>

        <div className="mt-[100px] mb-[80px] flex flex-col items-start justify-center gap-[2rem]">
          <h4 className="text-darkblue font-walsheimCon text-[18px] font-normal leading-normal">Using our services</h4>
          <p className="text-[#4F547B] font-walsheimReg font-[400] capitalize leading-[26px] text-[15px]">
            You must follow any policies made available to you within the
            Services. Don't misuse our Services. For example, don't interfere
            with our Services or try to access them using a method other than
            the interface and the instructions that we provide. You may use our
            Services only as permitted by law, including applicable export and
            re-export control laws and regulations. We may suspend or stop
            providing our Services to you if you do not comply with our terms or
            policies or if we are investigating suspected misconduct. Using our
            Services does not give you ownership of any intellectual property
            rights in our Services or the content you access. You may not use
            content from our Services unless you obtain permission from its
            owner or are otherwise permitted by law. These terms do not grant
            you the right to use any branding or logos used in our Services.
            Don't remove, obscure, or alter any legal notices displayed in or
            along with our Services.
          </p>
          <h4 className="text-darkblue font-walsheimCon text-[18px] font-normal leading-normal">Your content in our services</h4>
          <p className="text-[#4F547B] font-walsheimReg font-[400] capitalize leading-[26px] text-[15px]">When you upload, submit, store, send or receive content to or through our Services, you give Front (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even if you stop using our Services (for example, for a business listing you have added to Front Maps). Some Services may offer you ways to access and remove content that has been provided to that Service. Also, in some of our Services, there are terms or settings that narrow the scope of our use of the content submitted in those Services.</p>
          <h4 className="text-darkblue font-walsheimCon text-[18px] font-normal leading-normal">Pay Attention</h4>
          <p className="text-[#4F547B] font-walsheimReg font-[400] capitalize leading-[26px] text-[15px]">Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use.</p>
        </div>
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
