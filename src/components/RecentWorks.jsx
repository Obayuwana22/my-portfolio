import React from "react";
import RecentWorksCard from "./RecentWorksCard";
import SubHeading from "./SubHeading";

const RecentWorks = () => {
  return (
    <div className="mt-6 pt-5 px-5 xl:px-[120px]">
      <SubHeading subHeading="Portfolio Showcase"/>
      <div>
        <RecentWorksCard />
      </div>
    </div>
  );
};

export default RecentWorks;
