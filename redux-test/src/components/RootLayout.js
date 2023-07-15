import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
  return (
    <div
    className="main-container  
    mx-auto 
    min-h-screen 
    bg-violet-600
    px-8
    md:px-20
    ">
    <Navbar />
    <main>
        <Outlet />
    </main>
    </div>
  )
}

export default RootLayout;