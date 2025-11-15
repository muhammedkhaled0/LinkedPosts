import React, { useState } from 'react'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
export default function MainLayout() {
  const[isDarked,setIsDarked]=useState(false);
  return (
    <div className={`dark:text-white ${isDarked?'dark':''}`}>
    <Navbar setIsDarked={setIsDarked} isDarked={isDarked}/>
    <div className={`bg-gray-300 min-h-screen  dark:text-white dark:bg-black/90 py-10 -mt-5  ${isDarked?'dark':''}`}>
    <div className='lg:w-4/6 md:w-5/6 mx-auto'>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}
