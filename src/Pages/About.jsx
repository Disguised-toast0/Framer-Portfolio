import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import Footer from "../Components/Footer";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const skills = [
    {
      title: "Frontend Dev & UI",
      desc: "Website design was the first thing that genuinely pulled me in. What started as curiosity quickly became a passion experimenting with layouts, colors, and structure, and slowly discovering how powerful storytelling through design can be.",
      icons: ["icons(1)", "icons(2)", "icons(6)", "icons(3)", "icons(4)"],
      img: ["skill-img1","skill-img2"]
    },
     {
      title: "Styling & Design",
      desc: "As I built more interfaces, I realized design wasn’t just about placing elements it was about intention. I began exploring spacing, typography, and visual hierarchy, understanding how small styling decisions shape the entire user experience.",
      icons: ["icons(11)", "icons(12)", "icons(13)", "icons(14)"],
      img: ["skill-img5","skill-img6"]
    },
    {
      title: "Web Animations",
      desc: "Then I discovered motion. Adding animation changed everything suddenly websites didn’t just look good, they felt dynamic. I started using movement to guide attention, create flow, and make interactions feel natural rather than mechanical.",
      icons: ["icons(20)", "icons(21)", "icons(22)"],
      img: ["skill-img3","skill-img4"]
    },
    {
      title: "Programming Languages",
      desc: "As my curiosity grew, I wanted to understand what was happening behind the scenes. Learning programming languages helped me think logically breaking problems down, structuring solutions, and building systems that weren’t just beautiful, but intelligent.",
      icons: ["icons(27)", "icons(36)"],
      img: ["skill-img7","skill-img8"]
    },
        {
      title: "Backend Dev",
      desc: "Frontend showed me experience. Backend taught me responsibility. I began building APIs and handling server-side logic, realizing that great applications aren’t just seen they’re supported by strong architecture underneath.",
      icons: ["icons(7)", "icons(8)", "icons(9)"],
      img: ["skill-img9","skill-img10"]
    },
    {
      title: "Database & Management",
      desc: "With backend development came the need to manage data properly. I learned how important structure and optimization are designing databases that are secure, scalable, and capable of supporting real-world applications.",
      icons: ["icons(29)", "icons(30)", "icons(31)"],
      img: ["skill-img11","skill-img12"]
    },
    {
      title: "Version Control & Collab",
      desc: "As projects became more complex, collaboration became essential. Version control taught me discipline writing cleaner code, managing changes carefully, and building in a way that works not just for me, but for teams.",
      icons: ["icons(33)", "icons(34)"],
      img: ["skill-img13","skill-img14"]
    },
    {
      title: "Cloud & Deployment",
      desc: "Eventually, I realized building isn’t complete until it’s live. Deployment and cloud infrastructure taught me how to scale ideas turning local projects into production-ready applications accessible to the world.",
      icons: ["icons(16)", "icons(24)", "icons(25)"],
      img: ["skill-img15","skill-img16"]
    },
  ];

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <section className="flex justify-between items-center w-full py-24 sm:px-20 px-6 mb-20">
        <h1 className="sm:text-6xl text-5xl font-black font-secondary">
          Skills
        </h1>

        <h1 className="text-white/40 sm:text-6xl text-5xl font-black">
          {skills.length}
          <span className="block text-lg font-normal text-white/60">
            areas
          </span>
        </h1>
      </section>

<section className="px-6 sm:px-20 pb-32">
  <div className="mb-20 font-semibold">
  <h1 className="font-secondary">⊙ From Curiosity to Craft</h1>
  <p className="text-white/40">hover or click for stories </p>
  </div>

  <div className="flex flex-col sm:gap-40 gap-20">
    {skills.map((item, index) => {
      const isLeft = index % 2 === 0;
      const isActive = activeIndex === index;

      return (
        <motion.div
          key={index}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="group"
          onClick={() =>
            window.innerWidth < 640 &&
            setActiveIndex(isActive ? null : index)
          }
        >
          <div
            className={`flex flex-col sm:flex-row items-center gap-8 sm:gap-16 ${
              isLeft ? "" : "sm:flex-row-reverse"
            }`}
          >
            <div
              className={`flex flex-col ${
                isLeft ? "items-start text-left" : "items-end text-right"
              } flex-1`}
            >
              <motion.h1
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.04 },
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl sm:text-6xl font-display font-semibold cursor-pointer"
              >
                {item.title}
              </motion.h1>
              <motion.div
                animate={{
                  opacity:
                    window.innerWidth < 640
                      ? isActive
                        ? 1
                        : 0
                      : undefined,
                  y:
                    window.innerWidth < 640
                      ? isActive
                        ? 0
                        : 20
                      : undefined,
                  height:
                    window.innerWidth < 640
                      ? isActive
                        ? "auto"
                        : 0
                      : undefined,
                }}
                variants={{
                  rest: { opacity: 0, y: 20, height: 0 },
                  hover: { opacity: 1, y: 0, height: "auto" },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-6 max-w-xl"
              >
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div
                  className={`flex gap-6 flex-wrap ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {item.icons.map((icon, i) => (
                    <motion.img
                      key={i}
                      src={`/icons/${icon}.webp`}
                      alt="tech icon"
                      whileHover={{ y: -6, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="w-9 h-9 sm:w-9 sm:h-9 object-contain"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative w-full h-[150px] sm:h-[300px] overflow-hidden">
                <motion.img
                  src={`/${item.img?.[0] || "skill-img1"}.jpg`}
                  alt="preview"
                  className="absolute w-full h-full object-cover"
                  animate={
                    window.innerWidth < 640
                      ? { y: isActive ? "-100%" : "0%" }
                      : undefined
                  }
                  variants={{
                    rest: { y: "0%" },
                    hover: { y: "-100%" },
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <motion.img
                  src={`/${item.img?.[1] || "skill-img2"}.jpg`}
                  alt="preview"
                  className="absolute w-full h-full object-cover"
                  animate={
                    window.innerWidth < 640
                      ? { y: isActive ? "0%" : "100%" }
                      : undefined
                  }
                  variants={{
                    rest: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;
