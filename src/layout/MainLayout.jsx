import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import TopNav from '../components/topnav/TopNav.jsx'

const MainLayout = () => {
  return (
    <>
      <Sidebar/>
      <div className='main'>
        <div className='main__content'>
          <TopNav/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default MainLayout