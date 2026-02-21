import React from "react";
import Footer from "../Components/Footer";
import { useState } from "react";
import { motion } from "motion/react";
import HoveringTexts from "../utils/HoveringTexts";

const Experience = () => {
  const [HoveredIndex, setHoveredIndex] = useState(null);

  const hoveredJobText = [
    // Tech role
    ["JAVASCRIPT", "NODE", "BUG FIXING"],

    // Intern / Tech role
    ["REACT", "DATABASES", "NODE BACKEND"],

    // Open source / Community
    ["OPEN SOURCE", "COLLABORATION", "CONTRIBUTOR"],

    // Moderator / Ops
    ["COMMUNITY", "OPERATIONS", "MODERATOR"],

    // Lead / Management
    ["TEAM", "LEADERSHIP", "MAINTAINENCE"],

    // Content / Blogging
    ["CONTENT", "CREATION", "ARTICLES"],
  ];

  const jobs = [
    {
      img: "/wicon6.webp",
      title: "GlobalLogic",
      subtitle: "Full Time",
      mintitle: "Associate Software Engineer",
      date: "NOV 2025 - PRESENT",
    },
    {
      img: "/wicon1.webp",
      title: "Pregrad",
      subtitle: "Intern",
      mintitle: "Backend Dev",
      date: "APR 2024 - JULY 2024",
    },
    {
      img: "/wicon2.webp",
      title: "Open Source",
      subtitle: "Contributor",
      mintitle: "Public",
      date: "APR 2023 - PRESENT",
    },
    {
      img: "/wicon3.webp",
      title: "Scaler",
      subtitle: "Moderator",
      mintitle: "Server",
      date: "JAN 2023 - AUG 2023",
    },
    {
      img: "/wicon4.webp",
      title: "HackthisFall",
      subtitle: "Management",
      mintitle: "Lead",
      date: "JUNE 2022 - OCT 2022",
    },
    {
      img: "/wicon5.webp",
      title: "Blogger",
      subtitle: "Medium",
      mintitle: "Content Posts ",
      date: "SEPT 2022 - PRESENT",
    },
  ];
  return (
    <div className="bg-black  overflow-hidden">
      <section className=" text-white min-h-screen relative text-xl sm:text-2xl pt-30">
        <div className="flex justify-between px-4 sm:px-20 pb-20 w-full sm:text-6xl text-5xl font-black font-secondary">
          <h1>Works</h1>
          <h1 className="text-white/40">
            {jobs.length}
            <span className="text-xl">exp</span>
          </h1>
        </div>

        {jobs.map((job, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <div className="flex items-center justify-between h-35 py-8 sm:px-20 px-4">
              <div className="flex gap-4 items-center w-80">
                <img
                  src={job.img}
                  alt={job.title}
                  className="sm:w-16 sm:h-16 w-10 h-10 rounded-2xl shadow-xl shadow-black/60"
                />
                <div className="font-secondary sm:text-xl text-lg">
                  <h1>{job.title}</h1>
                  <h1 className="sm:text-lg text-sm text-white/60">{job.mintitle}</h1>
                </div>
              </div>

              <h1 className="sm:mr-10 sm:text-[10px] text-[6.5px] tracking-wider text-center border sm:w-32 w-23 rounded-2xl">
                {job.date}
              </h1>
            </div>

            {HoveredIndex === index && (
              <motion.div
                layoutId="hover-layer"
                className="absolute cursor-pointer inset-0 bg-white/10 backdrop-blur-lg flex items-center justify-between py-8 sm:px-20 px-4"
                transition={{
                  type: "tween",
                  duration: 0.2,
                  ease: "easeOut",
                }}
                // bg-purple-300
              >
                <HoveringTexts
                  Hometexts={hoveredJobText[index]}
                  textdetails={{
                    size: "text-[100px]",
                    color: "text-purple-300",
                    pace: 5,
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Experience;
