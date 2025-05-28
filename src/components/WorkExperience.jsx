import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import SubHeading from "./SubHeading";

const WorkExperience = () => {
  return (
    <div className="relative pt-5 px-5 xl:px-[120px] ">
      <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] left-2/4 -translate-x-1/2 top-10 bg-[#00C8FF3D] transform rotate-45 blur-[337px]"></div>

      <SubHeading subHeading="My Experience" />
      <div className="relative">
        <WorkExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
