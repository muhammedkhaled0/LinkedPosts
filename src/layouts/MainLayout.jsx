import React from 'react'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-300 py-4 min-h-screen'>
    <Outlet/>
    </div>
    {/* <Footer/> */}
    </>
  )
}
