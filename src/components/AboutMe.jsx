import React from "react";
import SubHeading from "./SubHeading";
import { Rocket } from "lucide-react";
// import aboutAvatar from "../assets/about-avatar2.png";

const AboutMe = () => {
  return (
    <div className="">
      <SubHeading subHeading="About me" />
      <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 ">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-white  font-medium xl:text-2xl xl:leading-9 xl:tracking-[0.18px] ">
            Welcome to my corner of the digital universe! I'm a passionate
            frontend developer, creating beautiful, responsive, and
            user-friendly web applications.
          </p>
          <p className="text-white  font-medium xl:text-2xl xl:leading-9 xl:tracking-[0.18px] ">
            My journey began with a curiosity about how websites work, and it
            has evolved into a deep love for crafting pixel-perfect interfaces
            that provide exceptional user experiences. I specialize in React,
            JavaScript, and modern CSS frameworks.
          </p>
          <p className="text-white  font-medium xl:text-2xl xl:leading-9 xl:tracking-[0.18px] ">
            Outside of coding, you’ll find me hiking local trails or watching
            awesome movies. Let’s create something great together!
          </p>
        </div>

        <div className="order-1 lg:order-2 mt-10 w-64 h-64 mx-auto bg-gradient-to-br from-[#00C8FF] to-[#E6F8FC] rounded-full flex items-center justify-center">
          <div className="w-56 h-56 bg-[#01313F] rounded-full flex items-center justify-center">
            <Rocket className="w-24 h-24 text-[#E6F8FC] float-animation" />
          </div>
        </div>
        {/* <div className="xl:mt-10">
          <img src={aboutAvatar} alt="guy in hoodie" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;

// import React from "react";
// import aboutAvatar from "../assets/about-avatar2.png";
// import triangle from "../assets/triangle.svg";
// import SubHeading from "./SubHeading";

// const AboutMe = () => {
//   return (
//     <div className="bg-[#000D12] px-5 py-16 xl:px-[120px] ">
//       <SubHeading subHeading="Who am I?"/>
//       <div className="flex flex-col-reverse items-center gap-7 xl:flex-row">
//         <div className="border border-[#555] rounded-xl p-6 relative">
//           <img src={triangle} alt="" className="w-16 absolute -right-3 -top-5" />
//           <p className="text-white  font-medium xl:text-2xl xl:leading-9 xl:tracking-[0.18px] ">
//             I’m Success, a frontend developer based in Lagos. I build
//             responsive, accessible web apps with modern tools like React. Vue,
//             and Tailwind CSS, always prioritizing performance and user
//             experience. Outside of coding, you’ll find me hiking local trails or
//             strumming my guitar. Over the last X years, I’ve turned pixels into
//             interactive web experiences - combining clean code with thoughtful
//             design to build sites that look great, load fast and stay accessible
//             for everyone. Let’s create something great together!
//           </p>
//           <img src={triangle} alt="" className="w-16 absolute -left-3 -bottom-4" />
//         </div>

//         <img src={aboutAvatar} alt="" className="" />
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
