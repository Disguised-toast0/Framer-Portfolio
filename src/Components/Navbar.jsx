import React from 'react'
import { useState,useEffect } from "react";
import { motion } from 'motion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isFullscreen , setisFullscreen] = useState(false)

    const handleClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // keep state synced even if user exits fullscreen via ESC
  useEffect(() => {
    const onChange = () => setisFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (  
    <div className='fixed top-0 left-0 bg-black/10 backdrop-blur-xl z-1 w-full  font-display text-center '>
      <div className='flex justify-between py-3 items-center sm:mx-12 mx-4 text-white sm:text-sm '>
        <h1 className='font-display tracking-wide cursor-pointer sm:text-lg'>
           Piyush K.
        </h1>
        <div className='flex sm:gap-4 gap-2 items-center justify-center z-100'>
        <p className='font-primary font-light text-right tracking-wider sm:text-[14px] text-[12px] cursor-pointer'>
            {isFullscreen?"Exit":"Go"} Fullscreen
        </p>
        <motion.button 
        whileHover={{y:2}}
        onClick={handleClick} 
        className='cursor-pointer text-white sticky sm:scale-180 scale-150 p-1  rounded-4xl hover:bg-black/20 ease-in-out'>
        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
        </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
