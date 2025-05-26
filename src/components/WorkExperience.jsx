import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import SubHeading from "./SubHeading";

const WorkExperience = () => {
  return (
    <div className="bg-[#000D12] px-5 pt-5 xl:px-[120px] xl:py-16">
      <SubHeading subHeading="My Experience"/>
      <div className="flex flex-col gap-8 lg:flex-row xl:gap-[70px] h-full">
        <div className="flex flex-col gap-8 flex-1">
          <WorkExperienceCard />
          <WorkExperienceCard />
          <WorkExperienceCard />
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <WorkExperienceCard />
          <WorkExperienceCard />
          <WorkExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
