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
      <div className="pt-[59px] h-screen px-[120px] bg-[#000D12] ">
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
