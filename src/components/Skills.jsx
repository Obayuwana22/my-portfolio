import { nanoid } from "nanoid";
import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import firebaseLogo from "../assets/firebase.png";
import appwriteLogo from "../assets/appwrite.png";
import SubHeading from "./SubHeading";

const tools = [
  { id: nanoid(), text: "HTML", logo: htmlLogo },
  { id: nanoid(), text: "CSS", logo: cssLogo },
  { id: nanoid(), text: "Javascript", logo: jsLogo },
  { id: nanoid(), text: "ReactJS", logo: reactLogo },
  { id: nanoid(), text: "TailwindCSS", logo: tailwindLogo },
  { id: nanoid(), text: "Firebase", logo: firebaseLogo },
  { id: nanoid(), text: "Appwrite", logo: appwriteLogo },
];

const Skills = () => {
  return (
    <div className="relative">
      <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] left-2/4 -translate-x-1/2 -top-10 bg-[#00C8FF3D] transform rotate-45 blur-[237px]"></div>
      <div className="relative py-5 px-5 md:pt-8 md:pb-[50px] xl:pt-16 xl:pb-[93px] xl:px-[120px] bg-[#000D12]">
        <SubHeading subHeading="Skills" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:flex lg:items-center lg:justify-between">
          {tools.map((tool) => (
            <div key={tool.id} className="flex items-center gap-2">
              <img
                src={tool.logo}
                alt="technology logo"
                className="w-9 rounded-full"
              />
              <div className="text-gray-white text-sm font-medium">
                {tool.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
