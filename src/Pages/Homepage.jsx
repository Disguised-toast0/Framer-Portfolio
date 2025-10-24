import React from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import HoveringTexts from '../utils/HoveringTexts';

const Homepage = () => {

  return (
    <div className=' overflow-x-hidden '>

   <div className='bg-[url("/background.jpg")] h-screen bg-center bg-no-repeat'>
      <div className='text-white  relative sm:text-7xl flex-wrap text-2xl font-secondary font-black  flex flex-col items-center justify-center w-full h-screen '>
        <h1>Hii, I am Piyush Koundal <br></br> and I create Websites <br></br> for fun, both Backend <br></br> and Frontend. </h1>
      </div>
  </div>


      <section
        id="about"
        className="bg-black text-white  sm:min-h-screen h-screen lg:h-screen  "
      >
        
         <div className='flex items-center text-center justify-center h-full px-7'>
        <div className='lg:flex justify-between w-full lg:mx-10 mx-4 space-y-10 lg:space-y-0'>
          <motion.h1 
          initial = {{opacity:0,translateX:"-100%"}}
          whileInView={{opacity:1,translateX:0}}
          transition={{duration:1.2}}
          viewport={{once:true}}
          className='sm:w-190 sm:text-[39px] sm:leading-12 capitalize text-left font-primary tracking-wide'>Driven by curiosity and a love for design, I create simple,
            functional, and visually striking digital experiences.
            As a student, I’m always learning and exploring new ideas.
          </motion.h1>
          
          <div className='sm:w-120 flex flex-col lg:text-right sm:text-left text-right sm:mt-30 justify-center'>

            <motion.h1 
            initial = {{opacity:0,translateX:"100%"}}
            whileInView={{opacity:1,translateX:0}}
            transition={{duration:1.4}}
            viewport={{once:true}}
            className='sm:text-xl font-secondary'>
              The fusion of my passion for design, development,
              and seamless user experiences places me at the intersection of creativity and technology in the digital world.
            </motion.h1>

            <h1 className='sm:text-2xl mt-6'>More About me
              <Link>
                <motion.span
                  whileHover={{ scale: 1.5, rotate: -45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="inline-block ml-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowUp}
                    className="rotate-45 ml-2 text-[40px] text-white hover:text-purple-600 duration-300 ease-in-out rounded-4xl"
                  />
                </motion.span>
              </Link>
            </h1>

          </div>
        </div>
         </div>
      </section>


   

    <div className=' text-white  pt-14 border-solid min-h-screen border-white/20 bg-black'>

      <div className='relative bg-black flex flex-col border-y-1 border-white/30 border-solid justify-center  sm:p-4 p-2'>
        <div className='lg:text-[30px] text-3xl flex items-center sm:h-fit  text-white '>
          <HoveringTexts/>
          <HoveringTexts/>
          <HoveringTexts/>
        </div>
      </div>

        <motion.div 
        initial={{opacity:0,translateY:"40%"}}
        whileInView={{opacity:1,translateY:0}}
        transition={{duration:1.2}}
        viewport={{once:true}}
        className='flex justify-between text-center items-center sm:p-10 p-4'>

          <h1 className='text-left sm:text-8xl text-4xl font-black font-primary '>Recent Works</h1>
          <h1 className='text-left text-white/40 font-black text-6xl mr-2 sm:text-8xl '>6</h1>
        </motion.div>

        <Projects />

        <div className='relative bg-black flex flex-col border-y-1 border-white/30 border-solid justify-center  sm:p-4 p-2'>
        <div className='lg:text-[30px] text-3xl flex items-center sm:h-fit  text-white '>
          <HoveringTexts/>
          <HoveringTexts/>
          <HoveringTexts/>
        </div>
      </div>
      
      </div>
    <Footer/>
    </div>
  )
}

export default Homepage