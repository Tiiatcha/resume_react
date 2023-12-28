import React from "react";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <ul className=" flex justify-gap gap-4 ">
      <NavigationItem title="ABOUT" url="#about" />
      <NavigationItem title="EXPERIENCE" url="#experience" />
      <NavigationItem title="PROJECTS" url="#projects" />
    </ul>
  );
}

export default Navigation;
