import { nanoid } from "nanoid";
import React, { useState } from "react";

const navLinks = [
  { id: nanoid(), text: "home", path: "/" },
  { id: nanoid(), text: "projects", path: "/projects" },
  { id: nanoid(), text: "resume", path: "/resume" },
  { id: nanoid(), text: "about", path: "/about" },
  { id: nanoid(), text: "contact me", path: "/contact-me" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(navLinks[0].id);
  return (
    <div>
      <nav className="flex justify-end  text-white capitalize font-normal text-xl">
        {navLinks.map((navLink) => (
          <ul key={navLink.id} className="">
            <li>
              <a
                href="#"
                onClick={() => setIsActive(navLink.id)}
                className={`px-10 py-3  ${
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
  );
};

export default Navbar;
