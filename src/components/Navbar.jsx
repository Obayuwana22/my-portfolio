import { nanoid } from "nanoid";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { id: nanoid(), text: "home", path: "/" },
  { id: nanoid(), text: "projects", path: "/projects" },
  { id: nanoid(), text: "resume", path: "/resume" },
  { id: nanoid(), text: "about", path: "/about" },
  { id: nanoid(), text: "contact", path: "/contact" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(navLinks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex flex-col justify-end text-white capitalize font-normal md:text-xl">
        <div className="flex items-center justify-between mb-10">
          <div className="font-bold block md:hidden">{"<Dev />"}</div>
          <div
            className=" md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
          </div>
        </div>
        {navLinks.map((navLink) => (
          <ul
            key={navLink.id}
            className={`bg-[#01313F] md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="my-2">
              <a
                href="#"
                onClick={() => setIsActive(navLink.id)}
                className={`px-3 py-1 xl:px-10 xl:py-3  ${
                  isActive === navLink.id ? "gradient-border" : "border-none"
                } `}
              >
                {navLink.text}
              </a>
            </li>
          </ul>
        ))}
      </nav>

      <div className="flex items-center justify-between">
        <div className=" font-bold  hidden md:block xl:text-xl">{"<Dev/>"}</div>
        <nav className="flex text-white capitalize font-normal xl:text-xl">
          {navLinks.map((navLink) => (
            <ul key={navLink.id} className="hidden md:block">
              <li>
                <a
                  href="#"
                  onClick={() => setIsActive(navLink.id)}
                  className={`px-5 py-1 xl:px-10 xl:py-3  ${
                    isActive === navLink.id ? "gradient-border" : "border-none"
                  } `}
                >
                  {navLink.text}
                </a>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
