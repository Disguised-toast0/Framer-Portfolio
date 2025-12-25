import React from "react";
import { motion } from "motion/react";

const HoveringTexts = ({
  Hometexts = ["&", "Developer", "&", "Designer"],
  textdetails = { size: "text-[30px]", color: "text-white", pace: 6 },
}) => {
  // const Hometexts = ["&", "Developer", "&", "Designer"];

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="flex flex-shrink-0 cursor-pointer font-secondary"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: textdetails.pace,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Hometexts.map((text, i) => {
            return (
              <h1
                key={i}
                className={`sm:pr-20 whitespace-nowrap pr-10 font-black ${textdetails.size} ${textdetails.color}  duration-700 ease-in-out`}
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
