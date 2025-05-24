import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <div className="bg-[#000D12] px-[120px] py-16">
      <div className="text-center mb-16 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
        My Work Experience
      </div>
      <div className="flex gap-[70px] h-full">
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
