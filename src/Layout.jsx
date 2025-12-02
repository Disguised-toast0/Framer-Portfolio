import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { UserProvider } from './Contexts/UserContext'
import Navbar from './Components/Navbar'
import Dynamicbar from './Components/Dynamicbar'
import Lenis from 'lenis'
import ScrolltoTop from './utils/ScrolltoTop'
import Loader from './Pages/Loader'
import { AnimatePresence,motion } from 'motion/react'

const Layout = () => {

// states contexts
const [play,setplay] = useState(false)
const [showLoader, setShowLoader] = useState(true);
const [transitionText, setTransitionText] = useState('');
const [isTransitioning, setIsTransitioning] = useState(false);
const location = useLocation()
const setplaying = () =>{
    setplay((prev)=> !prev)
}

 const buzzWords = [
    "POrtal OpeNS!",
    "Pizza?",
    "INtruDer?",
    "Space Mariness!",
    "Be Cautious!",
    "CurIous?",
    "Self Destructing in T-10s!",
    "Malfuntion!",
    "Smileee!",
    "Error 404!",
    "Spooky!",
    "Coffee Break?"
  ];

// for text in transition
useEffect(() => {
    const randomText = buzzWords[Math.floor(Math.random() * buzzWords.length)];
    setTransitionText(randomText);
  }, [location.pathname]);

// scroll animation bar at bottom
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const bar = document.getElementById("progress");
    if (bar) {
      bar.style.width = progress + "%";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

// its to keep content hidden while transitioning
useEffect(() => {
  setIsTransitioning(true);
  const timeout = setTimeout(() => {
    setIsTransitioning(false);
  }, 960);

  return () => clearTimeout(timeout);
}, [location.pathname]);

// Lenis smooth scroll entire website
useEffect(() => {
    const lenis = new Lenis({
      // easing: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, 
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
}, []);

// Loader animation for logo
useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); 
    return () => clearTimeout(timer);
}, []); 

  if (showLoader) return <Loader />

  return (
    <UserProvider value={{play,setplaying}}>
      <ScrolltoTop/>
      <div id="progress" className="fixed bottom-0 left-0 h-1 rounded-4xl bg-purple-400 z-50"/>
      <Navbar/>

       {isTransitioning && (
      <div className="fixed inset-0 bg-black z-40 pointer-events-none" />
    )}

<AnimatePresence mode='wait'>
   <motion.div key={location.pathname}>
     <div className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none flex'>
       {[...Array(5)].map((_, index) => (
         <motion.div
          key={`entry-${index}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08 // delay
          }}
          className='origin-top w-1/5 h-screen bg-orange-500'
        >
          {index === 2 && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.7 }}
              transition={{ duration: 0.7 }}
              className='text-white font-fancy sm:text-4xl text-xl font-bold  tracking-wider h-full flex items-center justify-center'
            >
              {transitionText}
            </motion.h1>
          )}
        </motion.div>
      ))}
    </div>
      <Outlet />
    <div className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none flex'>
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`exit-${index}`}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08
          }}
          className='origin-bottom w-1/5 h-screen bg-orange-500'
        >
          
        </motion.div>
      ))}
    </div>
  </motion.div>
</AnimatePresence>
      <Dynamicbar/>
    </UserProvider>
  )
}

export default Layout



