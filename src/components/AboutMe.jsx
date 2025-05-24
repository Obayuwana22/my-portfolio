import React from "react";
import aboutAvatar from "../assets/about-avatar2.png";
import triangle from "../assets/triangle.svg";

const AboutMe = () => {
  return (
    <div className="bg-[#000D12] px-[120px] py-16">
      <div className="text-center mb-8 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
        About Me
      </div>
      <div className="flex items-center gap-7">
        <div className="border border-[#555] rounded-xl p-6 relative">
          <img src={triangle} alt="" className="absolute -right-11 -top-10" />
          <p className="text-white text-2xl font-medium leading-9 tracking-[0.18px]">
            I’m Success, a frontend developer based in Lagos. I build
            responsive, accessible web apps with modern tools like React. Vue,
            and Tailwind CSS, always prioritizing performance and user
            experience. Outside of coding, you’ll find me hiking local trails or
            strumming my guitar. Over the last X years, I’ve turned pixels into
            interactive web experiences - combining clean code with thoughtful
            design to build sites that look great, load fast and stay accessible
            for everyone. Let’s create something great together!
          </p>
          <img src={triangle} alt="" className="absolute -left-9 -bottom-6" />
        </div>

        <img src={aboutAvatar} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
