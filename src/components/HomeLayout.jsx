import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import RecentWorks from "./RecentWorks";
import WorkExperience from "./WorkExperience";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const HomeLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="">
      
      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="pt-5 px-5 bg-[#000D12] xl:pt-[59px] xl:px-[120px]">
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <RecentWorks />
      <WorkExperience />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default HomeLayout;
