import React from "react";
import RecentWorksCard from "./RecentWorksCard";
import SubHeading from "./SubHeading";

const RecentWorks = () => {
  return (
    <div className=" bg-[#000D12] px-5 pt-5 xl:px-[120px] xl:pb-10">
      <SubHeading subHeading="Portfolio Showcase"/>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <RecentWorksCard />
        <RecentWorksCard />
        <RecentWorksCard />
        <RecentWorksCard />
        <RecentWorksCard />
        <RecentWorksCard />
      </div>
    </div>
  );
};

export default RecentWorks;
