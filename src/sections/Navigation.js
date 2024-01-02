import React from "react";
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <ul className=" lg:flex lg:justify-gap lg:gap-4 hidden">
        <NavigationItem title="ABOUT" url="#about" />
        <NavigationItem title="EXPERIENCE" url="#experience" />
        <NavigationItem title="PROJECTS" url="#projects" />
      </ul>
      <div onClick={handleNav}>
        {navOpen ? (
          <AiOutlineClose
            size={20}
            className="lg:hidden fixed top-5 right-5 text-sky-500"
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className="lg:hidden fixed top-5 right-5 text-sky-500"
          />
        )}
      </div>

      <div
        className={`${
          navOpen
            ? "lg:hidden fixed left-0 top-0 w-[80%] h-full border-r border-slate-800 bg-slate-900"
            : "lg:hidden fixed left-[-90%] top-0"
        } ease-in-out duration-300
        `}
      >
        <ul className=" lg:flex lg:justify-gap lg:gap-4 relative p-4 pt-20">
          <NavigationItem title="ABOUT" url="#about" onClick={handleNav} />
          <NavigationItem
            title="EXPERIENCE"
            url="#experience"
            onClick={handleNav}
          />
          <NavigationItem
            title="PROJECTS"
            url="#projects"
            onClick={handleNav}
          />
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
