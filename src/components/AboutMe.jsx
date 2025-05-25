import React from "react";
import aboutAvatar from "../assets/about-avatar2.png";
import triangle from "../assets/triangle.svg";

const AboutMe = () => {
  return (
    <div className="bg-[#000D12] px-5 py-16 xl:px-[120px] ">
      <div className="text-center mb-8 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
        About Me
      </div>
      <div className="flex flex-col-reverse items-center gap-7 xl:flex-row">
        <div className="border border-[#555] rounded-xl p-6 relative">
          <img src={triangle} alt="" className="w-16 absolute -right-3 -top-5" />
          <p className="text-white  font-medium xl:text-2xl xl:leading-9 xl:tracking-[0.18px] ">
            I’m Success, a frontend developer based in Lagos. I build
            responsive, accessible web apps with modern tools like React. Vue,
            and Tailwind CSS, always prioritizing performance and user
            experience. Outside of coding, you’ll find me hiking local trails or
            strumming my guitar. Over the last X years, I’ve turned pixels into
            interactive web experiences - combining clean code with thoughtful
            design to build sites that look great, load fast and stay accessible
            for everyone. Let’s create something great together!
          </p>
          <img src={triangle} alt="" className="w-16 absolute -left-3 -bottom-4" />
        </div>

        <img src={aboutAvatar} alt="" className="" />
      </div>
    </div>
  );
};

export default AboutMe;
