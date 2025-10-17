import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import {faComments,faHouse,faFileLines,faCircleArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Dynamicbar = () => {
  return (
    <div className='flex justify-center'>
      <div className='fixed bottom-4 z-101  bg-[#171717] rounded-4xl sm:w-[370px] w-[350px] py-2 px-4 shadow-black shadow-2xl '>
             <div className='text-white text-lg text-center flex justify-between items-center cursor-pointer'>


              <motion.span
              whileHover={{scale:1.5,rotate:45,y:-15}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              ><NavLink to={"about"} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"}  bg-[#262626] hover:bg-[#D4D4D4] -rotate-45 hover:text-black duration-300 ease-in-out p-3 rounded-[99px]`}><FontAwesomeIcon icon={faCircleArrowUp}/>
              </NavLink>
              </motion.span>

              <motion.span
              whileHover={{scale:1.5,rotate:-25,y:-15}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              ><NavLink  to={"contact"} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"} bg-[#262626] hover:bg-[#D4D4D4] hover:text-black duration-300 ease-in-out p-3 rounded-4xl`}>
              <FontAwesomeIcon icon={faComments}/>
              </NavLink>
              </motion.span>

              <motion.span
              whileHover={{scale:1.5,rotate:-25,y:-15}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              ><NavLink to={"/"} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"} bg-[#262626] hover:bg-[#D4D4D4] hover:text-black duration-300 ease-in-out p-3 rounded-4xl`}>
              <FontAwesomeIcon icon={faHouse}/>
              </NavLink>
              </motion.span>

              <motion.span
              whileHover={{scale:1.5,rotate:-25,y:-15}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              ><NavLink  to={"resume"} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"} bg-[#262626] hover:bg-[#D4D4D4] hover:text-black duration-300 ease-in-out p-3 rounded-4xl`}>
              <FontAwesomeIcon icon={faFileLines}/>
              </NavLink>
              </motion.span>

              <motion.span
              whileHover={{scale:1.5,rotate:-25,y:-15}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              ><NavLink  to={"github"} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"} bg-[#262626] hover:bg-[#D4D4D4] hover:text-black duration-300 ease-in-out p-3 rounded-4xl`}>
              <FontAwesomeIcon icon={faGithub}/>
              </NavLink>
              </motion.span>
        

              

             </div>
            </div>
    </div>
  )
}

export default Dynamicbar
