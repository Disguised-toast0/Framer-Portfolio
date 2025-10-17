import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { UserProvider } from './Contexts/UserContext'
import Navbar from './Components/Navbar'
import Dynamicbar from './Components/Dynamicbar'
import Footer from './Components/Footer'

const Layout = () => {

   const location = useLocation();

  // hide layout footer only on homepage
  const hideFooterOnHome = location.pathname === "/";

  return (
    <UserProvider>
      <Navbar/>
        <Outlet />
      <Dynamicbar/>
      {!hideFooterOnHome && <Footer />}
    </UserProvider>
  )
}

export default Layout
