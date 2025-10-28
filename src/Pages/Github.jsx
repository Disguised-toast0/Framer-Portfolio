import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Footer from '../Components/Footer'
import { motion } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor} from '@fortawesome/free-solid-svg-icons'

const Github = () => {
    const data = useLoaderData()
  return (
    <div className='overflow-hidden'>
      <section className='h-screen font-bold bg-black text-white '>
         <div className='flex justify-between px-4 pt-30 sm:px-20 pb-20 w-full sm:text-6xl text-5xl font-black font-secondary'>
      <h1>Github</h1>
      <h1 className='text-white/40'>{data.public_repos}<span className='text-xl'>repo</span></h1>
        </div>
        <div className='sm:flex justify-evenly'>
          <motion.div
          animate={{y:[0,-20,0]}}
          transition={{duration:2,ease:"easeInOut",repeat:Infinity,repeatType:"loop"}}
          >
            <motion.div
          initial={{clipPath:"inset(50% 0% 50% 0%)",y:30}}
          whileHover={{clipPath:"inset(50% 0% 50% 0%)"}}
          whileInView={{clipPath:"inset(0% 0% 0% 0%)",y:0}}
          transition={{duration:1.2,ease:"easeInOut"}}
          className='inline-block'
            >
         <img 
        src={"/favicon.png"}
        alt='Logo image'
        className='mt-10 rounded-2xl sm:w-60 w-20 sm:mx-0 mx-6 cursor-pointer'
        />
            </motion.div>
          </motion.div>
        <div className='sm:mx-20 mx-6 flex flex-col items-start gap-8 font-secondary'>
        <h1 className='text-4xl  hover:bg-white duration-300 ease-in-out cursor-pointer hover:text-black text-center font-black sm:py-2 rounded-2xl text-white'>{data.name}</h1>
        <h1 className='sm:text-2xl text-white/70 sm:w-130 w-90'>{data.bio}</h1>    
        <h1 className='sm:text-4xl flex flex-wrap gap-3'>Rate this repo on Github <a href="https://github.com/Disguised-toast0/Framer-Portfolio" target='_blank'>
        <span className='bg-white text-black font-bold py-2 px-4 rounded-2xl
         hover:duration-300 ease-in-out hover:bg-yellow-300 cursor-pointer'>
          Star <FontAwesomeIcon icon={faMeteor} className=''/></span></a></h1>  
        </div>
        
        </div>
      </section>
        <Footer/>
    </div>
  )
}

export default Github

export const GetGithubData = async () =>{
    const Data = await fetch("https://api.github.com/users/Disguised-toast0")
    return Data.json()
}