import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const [time,settime] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    const interval = setInterval(()=>{
      settime(new Date().toLocaleTimeString())
    },1000)
    return () => clearInterval(interval)
  },[])

  return (
    <footer className='w-full sm:pt-20 pt-30 bg-black text-white '>
      <div className='sm:mx-20 mx-4'>
      <div>
        <h1 className='sm:w-200 w-90 text-[33px] sm:text-6xl lg:text-5xl font-display sm:font-secondary '>Got a project in mind? Let’s talk</h1>
      </div>
    

        <div className='flex sm:gap-x-45 font-secondary sm:justify-start justify-between pt-10 '>
            <div>
                <h1 className='text-xl mb-2 text-[#7E7E7E]'>Email</h1>
                <a aria-label='Send an email' href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushk2325@gmail.com&su=Hello%20Piyush&body=I%20visited%20your%20portfolio!" 
                target="_blank" rel="noopener noreferrer">
                  <h1 className='sm:text-xl text-sm'>Piyushk2325@gmail.com</h1></a>
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
          <li className='hover:text-yellow-300'><a href='https://dribbble.com/piyush-koundal' target='_blank' aria-label='dribble'>Dribble</a></li>
         <li className='hover:text-yellow-300'><a href='https://x.com/the_piyush_k' target='_blank' aria-label='Twitter'>Twitter</a></li>
          <li className='hover:text-yellow-300'><a href='https://www.linkedin.com/in/piyush-koundal-649471203/' target='_blank' aria-label='Linkedin'>Linkedin</a></li>
        <li className='hover:text-yellow-300'><a href='https://github.com/Disguised-toast0' target='_blank' aria-label='Github'> Github</a></li>
        </ul>
        <NavLink to={"/skills"}>
        <button 
        aria-label='About'
        className='sm:text-6xl text-4xl bg-white/40 rounded-[99px] sm:w-30 sm:h-30 w-20 h-20 text-white hover:text-black cursor-pointer
         hover:bg-white duration-500 ease-in-out sm:mr-30 mr-10'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></NavLink>
        </div>

        <div className='sm:flex justify-between mx-4 gap-20 items-center '>
        <h1 className='lg:text-[190px]  text-6xl font-primary font-bold text-white/60 '>@itspiyushk</h1>
        <h1 className='sm:text-[40px] text-2xl pt-5 font-primary'>Your friendly chaos creator </h1>
        </div>
        <div className='sm:p-10 px-5 pt-2 flex justify-between font-secondary text-white/80 capitalize text-sm'>
        <h1>don't steal my work!</h1>
        <h1>{time}</h1>
        </div>
        </section>

        </footer>
  )
}



export default Footer
