import React, { useState } from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faCircleArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro';

const Projects = () => {
    

    const images = [
       {img:"/05.png", text:"Orbit Project Collaboration",subtext:"Backend Structured"},
       {img:"/02.png", text:"Gentest Automation Tool",subtext:"Saas Platform"},
       {img:"/03.png", text:"MoodScope Analyzer",subtext:"Project Themed"},
       {img:"/01.png", text:"BookStore",subtext:"Frontend Design"},
       {img:"/04.png", text:"Discord Automated Bots",subtext:" Server Automation"},
       {img:"/06.png", text:"Password Generator",subtext:"Hashed Passwords"},
    ]

  return (
    <div className=' p-2 w-full'>


      <div className='sm:grid gap-2 gap-y-8 pb-20 sm:pt-20 h-full w-full grid-cols-3'>
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

              <img src={img.img} className={`w-full h-90 sm:p-0 p-4 object-cover shadow-md shadow-black/30`}/>
          </motion.div>
        })}
    </div>

    </div>
  )
}

export default Projects
