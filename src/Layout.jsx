import React, { useEffect, useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { UserProvider } from './Contexts/UserContext'
import Navbar from './Components/Navbar'
import Dynamicbar from './Components/Dynamicbar'
import Lenis from 'lenis'
import ScrolltoTop from './utils/ScrolltoTop'
import Loader from './Pages/Loader'

const Layout = () => {

  window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

const [play,setplay] = useState(false)
const setplaying = () =>{
    setplay((prev)=> !prev)
}

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

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []); 

  if (showLoader) return <Loader />;

   const navigation = useNavigation()

  if(navigation.state === "loading") return <Loader/>
  return (
    <UserProvider value={{play,setplaying}}>
      <ScrolltoTop/>
      <div id="progress" className="fixed bottom-0 left-0 h-1 rounded-4xl bg-purple-400 z-50 "></div>
      <div className="relative min-h-screen flex flex-col">
      <Navbar/>
      <main className='flex-1'>
        <Outlet />
      </main>
      <Dynamicbar/>
      </div>
    </UserProvider>
  )
}

export default Layout



