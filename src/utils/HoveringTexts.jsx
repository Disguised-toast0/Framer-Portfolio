import React from "react";
import { motion } from "motion/react";

const HoveringTexts = ({
  Hometexts = ["&", "Developer", "&", "Designer"],
  textdetails = { size: "4xl", color: "white" },
}) => {
  // const Hometexts = ["&", "Developer", "&", "Designer"];

  return (
    <div className="flex">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="flex flex-shrink-0 cursor-grab font-secondary"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          {Hometexts.map((text, i) => {
            return (
              <h1
                key={i}
                className={`sm:pr-20 whitespace-nowrap pr-10 text-${textdetails.size} text-${textdetails.color}  duration-700 ease-in-out`}
              >
                {text}
              </h1>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default HoveringTexts;
