import React from "react";
import { motion } from "framer-motion";

const sectionTitleAnimateVariants = {
  initial: {
    x: 150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Section({ id, title, children }) {
  return (
    <div id={id} className="mb-20">
      <motion.h4
        variants={sectionTitleAnimateVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="text-4xl font-extrabold text-slate-800 mb-2"
      >
        {title}
      </motion.h4>
      {children}
    </div>
  );
}

export default Section;
