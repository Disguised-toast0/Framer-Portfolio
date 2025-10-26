import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { faHouse, faLayerGroup, faUserAstronaut, faCode} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Dynamicbar = () => {
  const [isVisible, setIsVisible] = useState(null)
  const icons = [{name:faUserAstronaut,to:"about",text:"About"},
    {name:faLayerGroup,to:"experience",text:"Work"},
    {name:faHouse,to:"/",text:"Home"},
    {name:faCode,to:"projects",text:"Projects"},
    {name:faGithub,to:"github",text:"Github"}]
  return (
    <div className='flex justify-center'>
      <motion.div 
      initial={{opacity:0,translateY:"-100%"}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className='fixed bottom-4 z-101  bg-[#171717] rounded-4xl sm:w-[370px] w-[350px] py-2 px-4 shadow-black shadow-2xl'>
             <div className='text-white text-lg text-center flex justify-between items-center cursor-pointer'>


            {icons.map((icon,index)=>(
                <motion.span
                key={index}
              whileHover={{scale:1.5,y:-15,rotate:-25}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className='inline-block'
              onMouseEnter={()=>setIsVisible(index)}
              onMouseLeave={()=>setIsVisible(null)}
              ><NavLink to={icon.to} className={({ isActive }) =>`flex ${isActive ? "bg-white text-black" : "text-white"}  bg-[#262626] hover:bg-[#D4D4D4] hover:text-black  duration-300 ease-in-out p-3 rounded-[99px]`}>
                <FontAwesomeIcon icon={icon.name}/>
                {isVisible === index && (
                  <h1 className='absolute sm:rotate-20 sm:inline-block hidden sm:bottom-12 left-3 font-secondary text-white bg-white/40 px-2 py-1 rounded-4xl text-[8px]'>{icon.text}</h1>
                )}
              </NavLink>
              </motion.span>
            ))}
              
        

              

             </div>
            </motion.div>
    </div>
  )
}

export default Dynamicbar
