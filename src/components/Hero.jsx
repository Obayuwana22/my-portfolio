import React from "react";
import aboutAvatar from "../assets/about-avatar2.png";
import { Download } from "lucide-react";
// import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col gap-5 items-center md:flex-row md:justify-center text-white xl:mt-36">
      <div className="mr-5">
        <div className="max-w-[50em]">
          <div className="text-3xl xl:text-5xl ">Hi, I am Success</div>
          <div className="text-3xl font-medium xl:text-5xl  xl:tracking-[0.36px] xl:leading-normal bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent">
            Frontend Developer
          </div>
          <p className="text-xl xl:text-[2.125rem] tracking-[0.255px] leading-normal">
            Crafting stellar digital experiences across the universe of web
            development
          </p>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="border px-3 py-1 rounded-[9px] font-medium xl:px-4 xl:py-3 xl:text-xl">
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Download CV <Download size={18} />{" "}
            </a>
          </button>
        </div>
      </div>

      <div className="">
        <img src={aboutAvatar} alt="guy in hoodie" />
      </div>
      {/* <div className="flex-1">
        <div className="order-1 lg:order-2 mt-10 w-64 h-64 mx-auto bg-gradient-to-br from-[#00C8FF] to-[#E6F8FC] rounded-full flex items-center justify-center">
          <div className="w-56 h-56 bg-[#01313F] rounded-full flex items-center justify-center">
            <Rocket className="w-24 h-24 text-[#E6F8FC] float-animation" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
