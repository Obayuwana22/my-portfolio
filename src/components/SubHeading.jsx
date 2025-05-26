import React from "react";

const SubHeading = ({subHeading}) => {
  return (
    <div className="mb-5 xl:mb-16 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent ">
      {subHeading}
    </div>
  );
};

export default SubHeading;
