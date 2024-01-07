import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressBarColor =
    "linear-gradient(90deg, rgba(3,105,161,1) 0%, rgba(125,211,252,1) 100%)";
  const outerStyle = {
    width: width,
    overflow: "hidden",
    zIndex: 50,
    position: "fixed",
    top: 0,
    height: "5px",
  };
  return (
    <motion.div id="page_progress__outer" style={outerStyle}>
      <div
        id="page_progress__inner"
        style={{
          width: "100vw",
          height: "100%",
          background: progressBarColor,
        }}
      ></div>
    </motion.div>
  );
};

export default ScrollProgressBar;
