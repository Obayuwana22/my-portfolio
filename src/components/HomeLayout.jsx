import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import RecentWorks from "./RecentWorks";
import WorkExperience from "./WorkExperience";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { MoveUp } from "lucide-react";

const HomeLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const homeSection = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative ">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-100 hidden xl:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="mb-16 relative z-10">
        <section id="home">
          <Navbar />
          <Hero />
        </section>
      </div>
      <section id="" className="my-16 xl:mt-40">
        <Skills />
      </section>
      <div className="space-y-16 xl:space-y-32 relative z-10">
        <section id="projects">
          <RecentWorks />
        </section>
        <section id="resume">
          <WorkExperience />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      <div
        onClick={homeSection}
        className="h-10 w-10 bg-[#00C8FF] rounded-full flex items-center justify-center fixed bottom-14 right-5 z-10"
      >
        <MoveUp className="moveUp-animation" />
      </div>
    </div>
  );
};

export default HomeLayout;
