import React from "react";
import RecentWorksCard from "./RecentWorksCard";
import SubHeading from "./SubHeading";

const RecentWorks = () => {
  return (
    <div className="">
      <SubHeading subHeading="Portfolio Showcase"/>
      <div>
        <RecentWorksCard />
      </div>
    </div>
  );
};

export default RecentWorks;
