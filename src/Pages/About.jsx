import React from 'react'
import { motion } from 'motion/react'
import Footer from '../Components/Footer';

const About = () => {

  const skills = [
  {
    title: "Front-End Development",
    icons: [
      { src: "icons(1)", alt: "HTML5 icon" },
      { src: "icons(2)", alt: "Javascript icon" },
      { src: "icons(3)", alt: "Typescript icon" },
      { src: "icons(4)", alt: "NextJs icon" },
      { src: "icons(5)", alt: "Redux icon" },
      { src: "icons(6)", alt: "React icon" },
    ],
    desc: "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    span: "col-span-1 row-span-3",
  },
  {
    title: "Web Animations",
    icons: [
      { src: "icons(20)", alt: "Framer Motion icon" },
      { src: "icons(21)", alt: "GSAP icon" },
      { src: "icons(22)", alt: "Spline icon" },
    ],
    desc: "Creating seamless animations and transitions to enhance user engagement and interactivity.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Programming Languages",
    icons: [
      { src: "icons(27)", alt: "Python icon" },
      { src: "icons(28)", alt: "C icon" },
      { src: "icons(36)", alt: "C++ icon" },
    ],
    desc: "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Styling & Design",
    icons: [
      { src: "icons(11)", alt: "Css icon" },
      { src: "icons(12)", alt: "Tailwindcss icon" },
      { src: "icons(13)", alt: "Bootstrap icon" },
      { src: "icons(14)", alt: "Sass icon" },
      { src: "icons(15)", alt: "NextUI icon" },
    ],
    desc: "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    span: "col-span-1 row-span-3",
  },
  {
    title: "Database Management",
    icons: [
      { src: "icons(29)", alt: "MySQL icon" },
      { src: "icons(30)", alt: "PostgreSQL icon" },
      { src: "icons(31)", alt: "MongoDB icon" },
      { src: "icons(32)", alt: "Firebase icon" },
    ],
    desc: "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Back-End Development",
    icons: [
      { src: "icons(7)", alt: "Node.js icon" },
      { src: "icons(8)", alt: "Express.js icon" },
      { src: "icons(9)", alt: "FastAPI icon" },
      { src: "icons(10)", alt: "REST API icon" },
    ],
    desc: "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Version Control & Collaboration",
    icons: [
      { src: "icons(33)", alt: "GitHub icon" },
      { src: "icons(34)", alt: "Git icon" },
    ],
    desc: "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "UI/UX Design",
    icons: [
      { src: "icons(35)", alt: "Figma icon" },
    ],
    desc: "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Testing & Debugging",
    icons: [
      { src: "icons(26)", alt: "Postman icon" },
      { src: "icons(18)", alt: "React Testing Library icon" },
      { src: "icons(19)", alt: "Selenium icon" },
    ],
    desc: "Ensuring code quality and reliability through rigorous testing and debugging processes.",
    span: "col-span-1 row-span-3",
  },
  {
    title: "Cloud & Deployment",
    icons: [
      { src: "icons(16)", alt: "Docker icon" },
      { src: "icons(17)", alt: "Azure icon" },
      { src: "icons(23)", alt: "Aws icon" },
      { src: "icons(24)", alt: "One icon" },
      { src: "icons(25)", alt: "Vercel icon" },
    ],
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
  
        <section className='flex justify-between bg-black w-full py-30 relative sm:px-20 px-4 text-white sm:text-6xl text-5xl font-black font-secondary'> 
        <div >
            <h1 >Skills</h1>
        </div>
        <h1 className='text-white/40'>{skills.length}<span className='text-xl'>areas</span></h1>
        </section>

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
                ><img key={i} src={`/icons/${icon.src}.webp`} alt={icon.alt} className='sm:bg-white/10 sm:p-3 rounded-md sm:w-15 sm:h-15 h-6 w-6'/></motion.div>
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
