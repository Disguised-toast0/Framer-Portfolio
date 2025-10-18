import React from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';

const Homepage = () => {

  const Hometexts = ["Developer", "Designer", "Creativist"]

  return (
    <div className=' bg-black/20 h-screen overflow-x-hidden '>

      <div className=' h-screen  bg-cover bg-center sm:bg-cover flex flex-col justify-center'>
        <div className='lg:text-[250px] mt-30  text-8xl flex items-center sm:h-fit text-white '>
          <motion.div
            className='flex flex-shrink-0 cursor-grab '
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {Hometexts.map((text, index) => {
              return <h1
                key={index}
                className='sm:pr-40 pr-10 hover:text-black font-black  duration-700 ease-in-out '
              >{text}</h1>
            })}
          </motion.div>
          <motion.div
            className='flex flex-shrink-0'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {Hometexts.map((text, index) => {
              return <h1
                key={index}
                className='sm:pr-40 pr-10 hover:text-yellow-400 font-black duration-700 ease-in-out'
              >{text}</h1>
            })}
          </motion.div>
        </div>
      </div>

      <section className='sm:h-[150vh] h-screen flex justify-center font-secondary font-black items-center text-2xl bg-white  sm:text-9xl '>
        <div className='sticky top-85'>
          Design Is  Essence
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-20 px-6 sm:px-10 lg:px-20 text-center h-[150vh]  flex items-center justify-center"
      >

        <div className='sm:flex space-y-10 sm:space-y-0 justify-between top-45 sticky'>
          <h1 className='sm:w-190 sm:text-[39px] sm:leading-12 capitalize text-left font-primary tracking-wide'>Driven by curiosity and a love for design, I create simple,
            functional, and visually striking digital experiences.
            As a student, I’m always learning and exploring new ideas.
          </h1>
          <div className='sm:w-120 flex flex-col justify-center  '>
            <h1 className='sm:text-xl sm:mt-30 text-right font-secondary'>
              The fusion of my passion for design, development,
              and seamless user experiences places me at the intersection of creativity and technology in the digital world.
            </h1>

            <h1 className='text-right sm:text-2xl mt-6'>More About me
              <Link>
                <motion.span
                  whileHover={{ scale: 1.5, rotate: -45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="inline-block ml-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowUp}
                    className="rotate-45 ml-2 text-[40px] text-black hover:text-purple-600 duration-300 ease-in-out rounded-4xl"
                  />
                </motion.span>
              </Link>
            </h1>
          </div>
        </div>
      </section>


      <div className='bg-white h-[250vh] pt-40  justify-center items-center z-1'>
        <div className=' sm:flex justify-between mx-20 mb-10'>
          <h1 className='text-left sm:text-8xl text-4xl font-black font-display '>Impressive Works</h1>
          <h1 className='sm:w-80 text-left mt-3 sm:mt-0 relative'>HERE’S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.</h1>
        </div>
        <div className='sticky top-95 flex items-center mb-50 justify-center'>
          <h1 className='bg-black text-white p-4 rounded-3xl'>Design that Goes with You.</h1>
        </div>
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
