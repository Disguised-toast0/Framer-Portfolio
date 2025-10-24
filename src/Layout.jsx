import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { UserProvider } from './Contexts/UserContext'
import Navbar from './Components/Navbar'
import Dynamicbar from './Components/Dynamicbar'
import Lenis from 'lenis'
import Footer from './Components/Footer'

const Layout = () => {

  window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // cleanup on unmount
  }, []);

  return (
    <UserProvider>
      <div id="progress" class="fixed bottom-0 left-0 h-1 bg-blue-500 z-50 "></div>
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

