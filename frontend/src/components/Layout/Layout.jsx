import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Scroll from '../Scroll/Scroll'

const Layout = () => {
  return (
    <div>
      <Scroll/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
