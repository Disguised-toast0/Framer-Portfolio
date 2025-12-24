import React from "react";
import { motion } from "motion/react";

const HoveringTexts = ({ Hometexts = ["&", "Developer", "&", "Designer"], textdetails={size:"4xl",color:"white"}}) => {
  return (
    <div>
      <motion.div
        className="flex flex-shrink-0 cursor-grab font-secondary"
        initial={{ x: 0, opacity: 100 }}
        animate={{ x: "-100%" }}
        exit={{ opacity: 40 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        {Hometexts.map((text, index) => {
          return (
            <h1
              key={index}
              className={`sm:pr-20 whitespace-nowrap pr-10 text-${textdetails.size} text-${textdetails.color}  duration-700 ease-in-out`}
            >
              {text}
            </h1>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HoveringTexts;
