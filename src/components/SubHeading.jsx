import React from "react";

const SubHeading = ({subHeading}) => {
  return (
    <div className="mb-5  font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent xl:mb-16 xl:text-4xl">
      {subHeading}
    </div>
  );
};

export default SubHeading;
