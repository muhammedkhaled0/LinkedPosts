import React from 'react'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-300 min-h-screen'>
    <div className=' py-4  lg:w-4/6 md:w-5/6 mx-auto'>
    <Outlet/>
    </div>
    </div>
    </>
  )
}
