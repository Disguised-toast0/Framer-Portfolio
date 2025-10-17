import React, { useState } from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faCircleArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Projects = () => {
    

    const images = [
        {img:"/01.png", text:"Winzee"},
        {img:"/02.png", text:"Gemini Chat"},
        {img:"/03.png", text:"Logicify"},
        {img:"/04.png", text:"Chatgpt"},
    ]

  return (
    <div className='bg-transparent z-100 relative'>
      <div className='sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-y-16 place-items-center pt-70'>
        {images.map((img,index)=>{
            return <div key={index}
            className='w-70 sm:w-150'
            >
              <img src={img.img} className='sm:w-150' /><h1 className='p-4 flex items-center sm:gap-2 sm:text-2xl text-lg font-display'>
              <Link>
                <motion.span
                  whileHover={{ scale: 1.5, rotate: -90,y:-20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="inline-block ml-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowUp}
                    className="rotate-90  sm:text-[40px] text-2xl text-black/40 hover:text-purple-600 duration-300 ease-in-out rounded-4xl"
                  />
                </motion.span>
              </Link>
              {img.text}</h1></div>
        })}
    </div>
    <div className='flex justify-center items-center sticky top-95'>
      <motion.button 
     whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    className='mt-15 border border-[#AEAEAE] py-2 px-4 rounded-3xl font-bold tracking-wide text-center border-solid cursor-pointer hover:bg-purple-500/80 hover:text-white ease-in-out'
    ><span className='font-black mr-1.5'>•</span>Explore More
    </motion.button>
    </div>
    </div>
  )
}

export default Projects
