import React from "react";
import RecentWorksCard from "./RecentWorksCard";

const RecentWorks = () => {
  return (
    <div className=" bg-[#000D12] px-5 pt-5 xl:px-[120px] xl:pb-10">
      <div className="text-center mb-10 font-semibold xl:text-[2rem] xl:mb-16  bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
        My Recent Works
      </div>
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
