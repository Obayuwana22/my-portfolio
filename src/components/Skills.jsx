import { nanoid } from "nanoid";
import React from "react";
import html from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import firebaseLogo from "../assets/firebase.png";
import appwriteLogo from "../assets/appwrite.png";

const tools = [
  { id: nanoid(), text: "HTMl", logo: {html} },
  { id: nanoid(), text: "CSS", logo: {cssLogo} },
  { id: nanoid(), text: "Javascript", logo: {jsLogo} },
  { id: nanoid(), text: "ReactJS", logo:  {reactLogo}},
  { id: nanoid(), text: "TailwindCSS", logo: {tailwindLogo}},
  { id: nanoid(), text: "Firebase", logo:{firebaseLogo} },
  { id: nanoid(), text: "Appwrite", logo:  {appwriteLogo}},
];

const Skills = () => {
  return (
    <div className="bg-[#000D12] py-14 px-[120px]">
      <div className="text-center mb-11 text-[#00C8FF] font-semibold text-[2rem]">
        My Skills
      </div>
      <div className="flex items-center justify-between">
        {tools.map((tool) => (
          <div key={tool.id} className="flex items-center gap-2">
            <img src={tool.logo} alt="technology logo" />
            <div className="text-white font-medium">{tool.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
