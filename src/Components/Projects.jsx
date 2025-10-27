import React, { useState } from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro';

const Projects = () => {
    

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
    <div className=' p-2 w-full'>


      <section className='sm:grid gap-2 gap-y-8 pb-20 sm:pt-20 h-full w-full grid-cols-3'>
        {images.map((img,index)=>{
          const layout = ["col-span-1 row-span-1","col-span-1 row-span-1","col-span-1 row-span-1","col-span-1 row-span-1"]
            return <motion.div 
            initial={{opacity:0,translateX:"-50%"}}
            whileInView={{opacity:1,translateX:"0%"}}
            whileHover={{y:-10}}
            transition={{duration:0.6}}
            key={index} className={` cursor-pointer bord border-solid border-white/30 pt-2 break-inside-avoid flex flex-col ${layout[index]}`}>

              <h1 className='sm:text-[13px] text-[10px] font-medium text-white/80 px-4 font-secondary'>
                <span><FontAwesomeIcon
                    icon={faCameraRetro}
                    className='mr-2'
                  /></span>
                SNAPSHOT</h1>

              <h1 className='flex px-4 text-white font-semibold items-center tracking-wider text-xl font-secondary'>

              {img.text}
              </h1>

              <h1 className='text-lg pb-2 px-4 text-white/40 font-display'>
                {img.subtext}
              </h1>

             <a href={img.href} target='_blank'><img 
             src={img.img}
             alt={img.alt}
             className={`w-full h-90 sm:p-0 p-4 object-cover shadow-md shadow-black/30`}/></a>
          </motion.div>
        })}
    </section>

    </div>
  )
}

export default Projects
