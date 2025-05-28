import { nanoid } from "nanoid";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { id: nanoid(), text: "home", path: "#home" },
  { id: nanoid(), text: "projects", path: "#projects" },
  { id: nanoid(), text: "resume", path: "#resume" },
  { id: nanoid(), text: "about", path: "#about" },
  { id: nanoid(), text: "Contact me", path: "#contact" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(navLinks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLinks = navLinks.filter((link) => link.text !== "Contact me");
  const contactLink = navLinks.find((link) => link.text === "Contact me");

  return (
    <div className="">
      <nav className="relative flex flex-col justify-end text-gray-white  capitalize font-normal md:text-xl pt-5 px-5 md:hidden">
        <div className="flex items-center justify-between mb-10">
          <div className="font-bold block ">{"<Dev />"}</div>
          <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
          </div>
        </div>
        {navLinks.map((navLink) => (
          <ul
            key={navLink.id}
            className={`bg-[#01313F] pl-3 md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="my-2">
              <a
                href={navLink.path}
                onClick={() => setIsActive(navLink.id)}
                className={`xl:px-10 xl:py-3  ${
                  isActive === navLink.id ? "border-b-2 pb-0.5" : "border-none"
                } `}
              >
                {navLink.text}
              </a>
            </li>
          </ul>
        ))}
      </nav>

      <div
        className="fixed w-full bg-transparent-500/30 backdrop-blur-md
z-50 hidden  md:flex items-center justify-between text-gray-white py-5 px-5 xl:px-[120px]"
      >
        <div className=" font-bold hidden md:block xl:text-xl">{"<Dev/>"}</div>
        <nav className="flex capitalize font-normal xl:text-xl">
          {mainLinks.map((navLink) => (
            <ul key={navLink.id} className="">
              <li>
                <a
                  href={navLink.path}
                  onClick={() => setIsActive(navLink.id)}
                  className={`px-5 py-1  xl:py-3  ${
                    isActive === navLink.id ? "gradient-border" : "border-none"
                  } `}
                >
                  {navLink.text}
                </a>
              </li>
            </ul>
          ))}
        </nav>

        <div className="hidden md:block ml-8">
          <a
            href={contactLink.path}
            onClick={() => setIsActive(contactLink.id)}
            className=" text-white font-medium rounded-xl bg-gradient-to-r from-[#00C8FF] to-[#01313F] py-2 px-3 xl:text-xl xl:py-3 xl:px-5 leading-normal"
          >
            {contactLink.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
