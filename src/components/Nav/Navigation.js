import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavigationItem from "./NavigationItem";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navItems = [
  { title: "ABOUT", url: "#about" },
  { title: "EXPERIENCE", url: "#experience" },
  { title: "PROJECTS", url: "#projects" },
];
const navAnimateVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};
function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <ul className=" lg:flex lg:justify-gap lg:gap-4 hidden">
        {navItems.map((navItem, i) => (
          <motion.div
            variants={navAnimateVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
          >
            <NavigationItem title={navItem.title} url={navItem.url} />
          </motion.div>
        ))}
      </ul>
      <div onClick={handleNav}>
        {navOpen ? (
          <AiOutlineClose
            size={20}
            className="lg:hidden fixed top-10 right-5 bg-slate-900 text-sky-500"
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className="lg:hidden fixed top-10 right-5 bg-slate-900 text-sky-500"
          />
        )}
      </div>

      <div
        className={`${
          navOpen ? "left-0 " : "left-[-90%]"
        } lg:hidden fixed top-0 w-[80%] h-full border-r border-slate-800 bg-slate-900 ease-in-out duration-300
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
