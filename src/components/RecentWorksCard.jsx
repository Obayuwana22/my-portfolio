import React from "react";
import tailwindLogo from "../assets/tailwind.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";



const RecentWorksCard = () => {
  return (
    <div className="text-white w-full border border-[#403F3F] rounded-2xl ">
      <div className="my-4 bg-red-500 h-40 w-full"></div>
      <div className="border-t-2 border-t-[#403F3F] rounded-t-2xl px-5 py-4">
        <div>Task Manager App</div>
        <p>A simple task management tool</p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex relative">
           <div className="w-9 z-40">
             <img src={tailwindLogo} alt="" className="rounded-full  " />
           </div>
           <div className="w-9 -ml-3 z-30">
             <img src={jsLogo} alt="" className="rounded-full " />
           </div>
           <div className="w-9 -ml-3 z-20">
             <img src={reactLogo} alt="" className="rounded-full " />
           </div>
          </div>

          <div className="flex gap-3">
            <button className="border px-3 py-1 rounded-[9px] font-medium xl:px-4 xl:py-3 xl:text-xl"><a href="#">Code</a></button>
            <button className="border px-3 py-1  font-medium  demo-border xl:px-4 xl:py-3 xl:text-xl"><a href="#">Demo</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorksCard;
