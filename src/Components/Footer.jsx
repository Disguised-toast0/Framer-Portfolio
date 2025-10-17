import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='w-full mt-90  '>
      <div className='sm:mx-20 mx-4 '>
      <div className='sm:mt-0 mt-10'>
        <h1 className='sm:w-240 w-90 text-[33px] sm:text-7xl font-black font-display sm:font-secondary'>Got a project in mind? Let’s talk</h1>
      </div>
      <h1 className='text-right border h-0 flex items-center justify-end sm:mt-6 mt-8'>
        <span className='sm:w-40 sm:h-40 w-20 h-20 bg-blue-600 mr-20 text-white rounded-[99px] text-center sm:text-2xl text-[12px] flex items-center justify-center'>Reach Out!</span></h1>

        <div className='flex sm:gap-x-45 sm:justify-start justify-between mt-30 '>
            <div>
                <h1 className='text-xl mb-2 text-[#7E7E7E]'>Email</h1>
                <h1 className='sm:text-2xl text-sm'>Piyushk2325@gmail.com</h1>
            </div>
            <div>
                <h1 className='text-xl mb-2 text-[#7E7E7E]'>Contact</h1>
                <h1 className='sm:text-2xl text-sm'>+91-9298729372</h1>
            </div>
        </div>
      </div>

        <section className='w-full mt-30 sm:h-fit pb-25  bg-black text-white'>
        <h1 className='sm:text-8xl text-3xl pt-8 px-4'>Your friendly chaos creator </h1>
        <div className='sm:flex justify-between mx-4 sm:mr-30 '>
        <h1 className='sm:text-[180px] text-7xl font-black'>PIYUSH K.</h1>
        <button 
        className='sm:text-6xl text-3xl mt-3 sm:mt-0 bg-white rounded-[99px] sm:w-30 sm:h-30 w-15 h-15 text-black cursor-pointer
         hover:bg-purple-700 duration-300 ease-in-out hover:text-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        </div>
        </section>
        </div>
  )
}



export default Footer
