import React from "react";
import css from "../assets/icons8-css.svg";
import html from "../assets/icons8-html-2.svg";
import js from "../assets/icons8-javascript-2.svg";
import mysql from "../assets/icons8-mysql.svg";
import nodejs from "../assets/icons8-node-js.svg";
import react from "../assets/icons8-react.svg";
import tailwind from "../assets/icons8-tailwind-css.svg";
import svelt from "../assets/icons8-svelte.svg";
import TechnologyImg from "./TechnologyImg";
import php from "../assets/icons8-php.svg";

function Technologies() {
  return (
    <div className="flex justify-gap gap-4">
      <TechnologyImg src={html} />
      <TechnologyImg src={css} />
      <TechnologyImg src={js} />
      <TechnologyImg src={mysql} />
      <TechnologyImg src={php} />
      <TechnologyImg src={react} />
      <TechnologyImg src={nodejs} />
      <TechnologyImg src={tailwind} />
      <TechnologyImg src={svelt} />
    </div>
  );
}

export default Technologies;
