import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        {/* this is where the child components will be rendered */}
        <Outlet /> 
    </>
  )
}

export default MainLayout