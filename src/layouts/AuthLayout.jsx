import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
    <div className='h-screen flex flex-wrap justify-center items-center'>
    <div className='w-md bg-white shadow-2xl px-6 py-10 mx-auto rounded-2xl'>
    <Outlet/>
    </div>
    </div>
    </>
  )
}
