import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faAngleDown, faForwardStep, faMapPin, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import HoveringTexts from '../utils/HoveringTexts';
import { useRef } from 'react';
import { UserData } from '../Contexts/UserContext';

const Homepage = () => {

  const {play,setplaying} = UserData()
  const bgmusicvid = ["/bgsoundvideo2.webm","/bgsoundvid4.mp4"]
  const [index,setindex] = useState(0)

  const videoref = useRef(null)
  // const audio = useRef(new Audio("/bgsound.mp3"))
  // const [playvid, setplayvid] = useState(false)

  const handleMusic = () => {
  //   if(!play){
  //     audio.current.play()
  //   }else{
  //     audio.current.pause()
  //   }xx
    setplaying((prev)=>!prev)
  }

  const playnextvid = () =>{
    const nextIndex = (index + 1) % bgmusicvid.length;
    setindex(nextIndex);
  }

  return (
    <div className=' overflow-x-hidden  bg-black'>

      <AnimatePresence mode="wait">
  {play ? (
    <motion.div
       key="video-section"
  initial={{ opacity: 0, scaleY: 0.95 }}
  animate={{ opacity: 1, scaleY: 1 }}
    exit={{ opacity: 0, clipPath:"inset(25% 0% 25% 0%)" }}
  transition={{ duration: 1, ease: "easeInOut" }}
  className="h-screen bg-black relative overflow-hidden"
    >
      <motion.video
        ref={videoref}
        initial={{ scale: 0.4, clipPath:"circle(0%)"}}
        animate={{ scale: 1, clipPath:"circle(100%)" }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 min-w-[100vh] min-h-[100vh]
        -translate-x-1/2 -translate-y-1/2 sm:object-cover sm:rotate-0 rotate-90 scale-[1.1]"
        src={bgmusicvid[index]}
        autoPlay
        loop
        playsInline
        style={{ willChange: "transform, opacity" }}
      ></motion.video>

      {/* Controls */}
      <div className="sm:pt-2 pt-3 inline-block sm:left-35 hover:text-white left-25 z-100 fixed text-white/40">
        <div className="flex items-center">
          <div className="text-sm mx-2">
            <motion.button
              aria-label='pause'
              whileHover={{scale:1.5,y:10}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className="rounded-3xl p-2 hover:bg-white hover:text-black ease-in-out cursor-pointer"
              onClick={handleMusic}
            >
              <FontAwesomeIcon icon={faPause} />
            </motion.button>
          </div>

          <div className="text-sm">
            <motion.button
              aria-label='play next'
              whileHover={{scale:1.5,y:10}}
              transition={{type:"spring",stiffness: 300, damping: 12}}
              className="rounded-3xl p-2 hover:bg-white hover:text-black ease-in-out cursor-pointer"
              onClick={playnextvid}
            >
              <FontAwesomeIcon icon={faForwardStep} />
            </motion.button>
          </div>

          <h1 className="p-2 font-secondary text-sm">
            <span className="sm:inline hidden">Track</span> {index + 1}/{bgmusicvid.length}
          </h1>
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      key="intro-section"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.6 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-black text-white relative sm:text-7xl text-2xl font-secondary h-screen w-full"
    >
      <div className="text-sm mx-2 pt-20 flex items-center gap-2">
        <motion.button
        aria-label='Play immersive music'
        whileHover={{scale:1.5,y:10,marginRight:"10px"}}
         transition={{type:"spring",stiffness: 300, damping: 12}}
          className="ml-1 bg-white/40 rounded-4xl h-8 w-8 hover:bg-white hover:text-black ease-in-out cursor-pointer"
          onClick={handleMusic}
        >
          <FontAwesomeIcon icon={faPlay} />
        </motion.button>
        <h1 className="font-secondary">Immersive music</h1>
      </div>

      <div className="flex flex-col items-center mx-10 justify-center sm:h-[70vh] h-[65vh] font-black text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Piyush Koundal{" "}
          <span className="text-xl block">Frontend & Full-Stack Dev</span>
          <span className="text-lg block text-white/70">
            Creating modern web experiences that connect design with performance.
          </span>
        </motion.h1>
      </div>
      <div className='block mx-4 sm:mt-16  text-sm text-end'>
      <h1 className=' text-white'>Scroll down</h1>
      <motion.p 
      animate={{y:[0,10,0]}}
      transition={{duration:2,repeat:Infinity,repeatType:"loop",ease:"easeInOut"}}
      className='mr-8'><FontAwesomeIcon icon={faAngleDown}/></motion.p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
        

      <section
        id="about"
        className="bg-black text-white  sm:min-h-screen h-screen lg:h-screen  "
      >

        <div className='flex items-center text-center justify-center h-full px-7'>
          <div className='lg:flex justify-between w-full lg:mx-10 mx-4 space-y-10 lg:space-y-0'>
            <motion.h1
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='sm:w-190 sm:text-[39px] sm:leading-12 capitalize text-left font-primary tracking-wide'>Driven by curiosity and a love for design, I create simple,
              functional, and visually striking digital experiences.
              As a student, I’m always learning and exploring new ideas.
            </motion.h1>

            <div className='sm:w-120 flex flex-col lg:text-right sm:text-left text-right sm:mt-30 justify-center'>

              <motion.h1
               initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 1 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className='sm:text-xl font-secondary'>
                The fusion of my passion for design, development,
                and seamless user experiences places me at the intersection of creativity and technology in the digital world.
              </motion.h1>

              <div className='flex items-center justify-end'>
              <h1 className='sm:text-2xl mt-6'>More About me </h1>
              <Link to={"/github"}>
                  <motion.button
                    aria-label='More about me'
                    whileHover={{ y:10,scale:1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="inline-block ml-6 cursor-pointer"
                  >
                    <FontAwesomeIcon  
                      icon={faMapPin}
                      className=" text-2xl p-2 mt-8 flex text-white bg-white/40 hover:text-black hover:bg-white duration-300 ease-in-out rounded-[99px]"
                    />
                  </motion.button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>




      <div className=' text-white  pt-14 border-solid min-h-screen border-white/20 bg-black'>

        <div className='relative bg-black flex flex-col border-y-1 border-white/30 border-solid justify-center  sm:p-4 p-2'>
          <div className='lg:text-[30px] text-3xl flex items-center sm:h-fit  text-white '>
            <HoveringTexts />
            <HoveringTexts />
            <HoveringTexts />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: "40%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className='flex justify-between text-center items-center sm:p-10 p-4'>

          <h1 className='text-left sm:text-8xl text-4xl font-black font-primary '>Recent Works</h1>
          <h1 className='text-left text-white/40 font-black text-6xl mr-2 sm:text-8xl '>6<span className='text-xl'>repo</span></h1>
        </motion.div>

        <Projects />

        <div className='relative bg-black flex flex-col border-y-1 border-white/30 border-solid justify-center  sm:p-4 p-2'>
          <div className='lg:text-[30px] text-3xl flex items-center sm:h-fit  text-white '>
            <HoveringTexts />
            <HoveringTexts />
            <HoveringTexts />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Homepage