import React from 'react'
import { motion } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='w-full sm:pt-20 pt-30 bg-black text-white '>
      <div className='sm:mx-20 mx-4'>
      <div>
        <h1 className='sm:w-200 w-90 text-[33px] sm:text-6xl lg:text-5xl font-display sm:font-secondary '>Got a project in mind? Let’s talk</h1>
      </div>
    

        <div className='flex sm:gap-x-45 font-secondary sm:justify-start justify-between pt-10 '>
            <div>
                <h1 className='text-xl mb-2 text-[#7E7E7E]'>Email</h1>
                <h1 className='sm:text-xl text-sm'>Piyushk2325@gmail.com</h1>
            </div>
            <div>
                <h1 className='text-xl mb-2 text-[#7E7E7E]'>Contact</h1>
                <h1 className='sm:text-xl text-sm'>+91-9298729372</h1>
            </div>
        </div>
      </div>

        <section className='w-full mt-15 lg:h-[55vh] sm:h-[28vh] h-[48vh] bg-black border-t-1 border-solid border-white/40 text-white'>

        <div className='flex justify-between items-center sm:px-10 px-4 sm:pt-4 '>
        <ul className='sm:flex flex-wrap py-6 px-4 sm:text-4xl text-2xl gap-6 cursor-pointer font-bold'>
          <li className='hover:text-yellow-300'>Instagram</li>
          <li className='hover:text-yellow-300'>Twitter</li>
          <li className='hover:text-yellow-300'>Linkedin</li>
          <li className='hover:text-yellow-300'>Github</li>
        </ul>
        <button 
        className='sm:text-6xl text-4xl bg-white rounded-[99px] sm:w-30 sm:h-30 w-20 h-20 text-black cursor-pointer
         hover:bg-purple-700 duration-300 ease-in-out hover:text-white sm:mr-30 mr-10'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        </div>

        <div className='sm:flex justify-between ml-4 gap-20 items-center '>
        <h1 className='lg:text-[190px]  text-6xl font-primary font-bold text-white/60 '>@itspiyushk</h1>
        <h1 className='sm:text-5xl text-2xl pt-5 font-display'>Your friendly chaos creator </h1>
        </div>

        </section>

        </div>
  )
}



export default Footer
