import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import RecentWorks from "./RecentWorks";
import WorkExperience from "./WorkExperience";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const HomeLayout = () => {
  return (
    <div className="">
      <div className="pt-5 px-5 bg-[#000D12] xl:pt-[59px] xl:px-[120px]">
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <RecentWorks />
      <WorkExperience />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default HomeLayout;
