import React from "react";
import RecentWorksCard from "./RecentWorksCard";

const RecentWorks = () => {
  return (
    <div className="bg-[#000D12] px-[120px] pb-10">
      <div className="text-center mb-16 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
        My Recent Works
      </div>
      <div className="flex gap-10 flex-wrap">
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
