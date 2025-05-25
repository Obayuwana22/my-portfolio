import React from "react";
import heroAvatar from "../assets/hero-avatar2.png";

const Hero = () => {
  return (
    <div className="flex flex-col text-white md:flex-row md:items-center md:justify-center">
      <div className="mt-5 xl:mt-[133px]">
        <div className="text-3xl xl:text-5xl ">Hi, I am Success</div>
        <div className="text-3xl font-medium xl:text-5xl  xl:tracking-[0.36px] xl:leading-normal bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent">
          Frontend Developer
        </div>
        <p className="text-xl xl:text-[2.125rem] tracking-[0.255px] leading-normal">
          crafting beautiful, performant web experiences
        </p>
      </div>

      <div className=" xl:mt-10">
        <img src={heroAvatar} alt="guy in hoodie" />
      </div>
    </div>
  );
};

export default Hero;
