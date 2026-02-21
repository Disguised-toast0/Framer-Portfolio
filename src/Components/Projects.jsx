import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons/faCameraRetro";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      img: "/05.webp",
      alt: "Orbit Project Collaboration Dashboard Interface",
      text: "Orbit Project Collaboration",
      subtext: "Backend Structured",
      href: "https://github.com/Disguised-toast0/Orbit---Project-Management-Tool",
    },
    {
      img: "/02.webp",
      alt: "Gentest Automation SaaS Platform Interface",
      text: "Gentest Automation Tool",
      subtext: "SaaS Platform",
      href: "https://gentest-frontend.onrender.com/",
    },
    {
      img: "/03.webp",
      alt: "MoodScope Sentiment Analyzer Web Application",
      text: "MoodScope Analyzer",
      subtext: "Project Themed",
      href: "https://mood-space-rosy.vercel.app/",
    },
    {
      img: "/01.webp",
      alt: "BookVerse Online Bookstore Frontend Design",
      text: "BookStore",
      subtext: "Frontend Design",
      href: "https://bookverse-premium-bookstore.netlify.app/",
    },
    {
      img: "/04.webp",
      alt: "Discord Automated Bot for Server Automation",
      text: "Discord Automated Bots",
      subtext: "Server Automation",
      href: "https://github.com/Disguised-toast0/AI_Discord_bot",
    },
    {
      img: "/06.webp",
      alt: "Password Generator Tool Interface",
      text: "Password Generator",
      subtext: "Hashed Passwords",
      href: "https://github.com/Disguised-toast0/Password-Generator",
    },
  ];

  return (
    <div className="p-2 w-full">
      <section className="sm:grid gap-2 gap-y-8 pb-20 sm:pt-20 h-full w-full grid-cols-3">
        {images.map((img, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
  key={index}
  initial={{ opacity: 0, x: "-50%" }}
  whileInView={{ opacity: 1, x: "0%" }}
  whileHover={{ y: -10 }}
  transition={{ duration: 0.6 }}
  className="relative  pt-2 flex flex-col overflow-hidden"
>
  <h1 className="sm:text-[13px] text-[10px] font-medium text-white/80 px-4 font-secondary">
    <FontAwesomeIcon icon={faCameraRetro} className="mr-2" />
    SNAPSHOT
  </h1>

  <h1 className="flex px-4 text-white font-semibold items-center tracking-wider text-xl font-secondary">
    {img.text}
  </h1>

  <h1 className="text-lg pb-2 px-4 text-white/40 font-display">
    {img.subtext}
  </h1>
  <div className="relative">
    
    <div
      className={`transition-all duration-300 ${
        isActive ? "blur-sm scale-[0.80]" : ""
      }`}
    >
      <img
        src={img.img}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        onClick={() => setActiveIndex(index)}
        className="w-full sm:h-90 h-60 sm:p-0 p-4 object-cover shadow-md shadow-black/30 cursor-pointer"
      />
    </div>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center px-6"
          >
            <h2 className="text-xl font-semibold mb-4 font-secondary">
              Wanna view live?
            </h2>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => {
                  window.open(img.href, "_blank");
                  setActiveIndex(null);
                }}
                className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:scale-105 transition"
              >
                Yea!
              </button>

              <button
                onClick={() => setActiveIndex(null)}
                className="px-6 py-2  text-white rounded-md hover:bg-white/10 transition"
              >
                Nah!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;