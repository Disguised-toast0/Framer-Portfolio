import React from 'react'
import { motion } from 'motion/react'
import Footer from '../Components/Footer';

const About = () => {

  const skills = [
  {
    title: "Front-End Development",
    icons: ["icons(1)", "icons(2)", "icons(3)","icons(4)", "icons(5)", "icons(6)"],
    desc: "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    span: "col-span-1 row-span-3",
  },
   {
    title: "Web Animations",
    icons: ["icons(20)", "icons(21)", "icons(22)"],
    desc: "Creating seamless animations and transitions to enhance user engagement and interactivity.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Programming Languages",
    icons: ["icons(27)", "icons(28)", "icons(36)"],
    desc: "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Styling & Design",
    icons: ["icons(11)", "icons(12)", "icons(13)","icons(14)","icons(15)"],
    desc: "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    span: "col-span-1 row-span-3",
  },
  {
    title: "Database Management",
    icons: ["icons(29)", "icons(30)", "icons(31)","icons(32)"],
    desc: "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Back-End Development",
    icons: ["icons(7)", "icons(8)", "icons(9)","icons(10)"],
    desc: "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Version Control & Collaboration",
    icons: ["icons(33)", "icons(34)"],
    desc: "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    span: "col-span-1 row-span-2",
  }, 
 {
    title: "UI/UX Design",
    icons: ["icons(35)",],
    desc: "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    span: "col-span-1 row-span-2",
  },
   {
    title: "Testing & Debugging",
    icons: ["icons(26)", "icons(18)", "icons(19)"],
    desc: "Ensuring code quality and reliability through rigorous testing and debugging processes.",
    span: "col-span-1 row-span-3",
  },
  {
    title: "Cloud & Deployment",
    icons: ["icons(16)", "icons(17)", "icons(23)","icons(24)","icons(25)"],
    desc: "Experienced in deploying and managing applications using modern cloud platforms and tools.",
    span: "col-span-1 row-span-4",
  },
  {
    title: " Personal Development",
    icons: [],
    desc: "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
    span: "col-span-1 row-span-3",
  },
    {
    title: "Core Computer Science Concepts",
    icons: [],
    desc: "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.",
    span: "col-span-1 row-span-2 ",
  },
];

  return (
    <div className=' overflow-x-hidden'>
  
        <div className='flex justify-between bg-black w-full py-30 relative sm:px-20 px-4 text-white sm:text-6xl text-5xl font-black font-secondary'> 
        <div >
            <h1 >Skills</h1>
        </div>
        <h1 className='text-white/40'>{skills.length}<span className='text-xl'>areas</span></h1>
        </div>

      <section className='sm:h-[200vh] grid  sm:grid-cols-3 bg-black grid-col-1 sm:grid-rows-10'>
        {skills.map((cols,index)=>(
          <motion.div 
          whileHover={{scale:1.1}}
          transition={{duration:0.1}}
          key={index}
          className={`border-white/40 hover:backdrop-blur-md p-6 sm:p-0 border-solid border-1 bg-black h-full w-full flex flex-col hover:bg-blue-500/10 justify-center ${cols.span}`}
          >
            <div className='flex flex-col justify-start mx-auto gap-y-3'>
            <div className='flex  gap-4 flex-wrap' >
              {cols.icons.map((icon,i)=>(
                <motion.div 
                whileHover={{y:-10}}
                ><img key={i} src={`/icons/${icon}.png`} className='sm:bg-white/10 sm:p-3 rounded-md sm:w-15 sm:h-15 h-6 w-6'/></motion.div>
              ))}
            </div>
            <h1 className='text-lg text-white'>{cols.title}</h1>
            <h1 className='text-sm text-white/60  w-90'>{cols.desc}</h1>
            </div>
          </motion.div>
        ))}
      </section>

    <Footer/>

      
    </div>


  )
}

export default About
