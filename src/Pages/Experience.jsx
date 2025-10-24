import React from 'react'
import Footer from '../Components/Footer'

const Experience = () => {

    const jobs = [
        {img:"/workicon6.png",title:"Venue",subtitle:"Intern",mintitle:"FullStack Dev",date:"MAY 2025 - AUG 2025"},
        {img:"/workicon1.png",title:"Pregrad",subtitle:"Intern",mintitle:"Backend Dev",date:"APR 2024 - JULY 2024"},
        {img:"/workicon2.png",title:"Open Source",subtitle:"Contributor",mintitle:"Public",date:"APR 2023 - PRESENT"},
        {img:"/workicon3.png",title:"Scaler",subtitle:"Moderator",mintitle:"Server",date:"JAN 2023 - AUG 2023"},
        {img:"/workicon4.png",title:"HackthisFall",subtitle:"Management",mintitle:"Lead",date:"JUNE 2022 - OCT 2022"},
        {img:"/workicon5.png",title:"Blogger",subtitle:"Medium",mintitle:"Content Posts ",date:"SEPT 2022 - PRESENT"},
    ]
  return (
    <div className='bg-black  overflow-hidden'>
        
      <section className=' text-white min-h-screen relative text-xl sm:text-2xl pt-30'>
        <div className='flex justify-between px-4 sm:px-20 pb-20 w-full sm:text-6xl text-5xl font-black font-secondary'> 
        <div >
            <h1 >Work</h1>
        </div>
        <h1 className='text-white/40'>{jobs.length}</h1>
        </div>
        
        {jobs.map((job,index)=>(
            <div key={index} className='flex items-center justify-between py-8 border-b-1 border-solid border-white/30 sm:px-20 px-4'>
            <div className='flex gap-4 items-center w-80'>
                <img src={job.img} className='w-16 h-16 rounded-2xl shadow-xl shadow-black/60'/>
                <div className='font-secondary sm:text-xl'>
                    <h1>{job.title}</h1>
                    <h1 className='text-lg'>{job.subtitle} <br></br> <span className=' text-white/40  text-sm'>{job.mintitle}</span></h1>
                </div>
            </div>
            <h1 className='sm:mr-10 text-center sm:text-[10px] text-[8px] font-secondary py-1 tracking-widest px-2 border rounded-2xl'>{job.date}</h1>
        </div>
        ))}

        
      </section>
    <Footer/>
    </div>
  )
}

export default Experience
