import { nanoid } from "nanoid";
import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import SubHeading from "./SubHeading";
// import firebaseLogo from "../assets/firebase.png";
// import appwriteLogo from "../assets/appwrite.png";

const tools = [
  { id: nanoid(), text: "HTMl", logo: htmlLogo },
  { id: nanoid(), text: "CSS", logo: cssLogo },
  { id: nanoid(), text: "Javascript", logo: jsLogo },
  { id: nanoid(), text: "ReactJS", logo: reactLogo },
  { id: nanoid(), text: "TailwindCSS", logo: tailwindLogo },
  // { id: nanoid(), text: "Firebase", logo: firebaseLogo },
  // { id: nanoid(), text: "Appwrite", logo: appwriteLogo },
];

const Skills = () => {
  return (
    <div className="bg-[#000D12] px-5 py-10 xl:py-14 xl:px-[120px]">
      <SubHeading subHeading="Skills and Technologies"/>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {tools.map((tool) => (
          <div key={tool.id} className="flex items-center gap-2">
            <img
              src={tool.logo}
              alt="technology logo"
              className="w-9 rounded-full"
            />
            <div className="text-white text-sm font-medium">{tool.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
