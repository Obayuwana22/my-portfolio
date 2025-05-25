import { nanoid } from "nanoid";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";

const navLinks = [
  { id: nanoid(), text: "home", path: "/" },
  { id: nanoid(), text: "projects", path: "/projects" },
  { id: nanoid(), text: "resume", path: "/resume" },
  { id: nanoid(), text: "about", path: "/about" },
  { id: nanoid(), text: "contact me", path: "/contact-me" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(navLinks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex flex-col justify-end text-white capitalize font-normal md:text-xl">
        <div className="flex items-center justify-between mb-5">
          <div className="block md:hidden">
            <TerminalRoundedIcon />
          </div>
          <div
            className=" md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuRoundedIcon />
          </div>
        </div>
        {navLinks.map((navLink) => (
          <ul
            key={navLink.id}
            className={`self-end md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          >
            <li>
              <a
                href="#"
                onClick={() => setIsActive(navLink.id)}
                className={` xl:px-10 xl:py-3  ${
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
        <div className="text-white hidden md:block">
          <TerminalRoundedIcon />
        </div>
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
