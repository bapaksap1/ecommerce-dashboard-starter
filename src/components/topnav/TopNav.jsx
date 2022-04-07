import React from 'react'
import { data } from '../../constants'
import UserInfo from '../user-info/UserInfo'
import './topnav.scss'


const TopNav = () => {
  return (
    <div className='topnav'>
      <UserInfo user={data.user} />
      <div className="sidebar-toggle">
        <i className='bx bx-menu-alt-right'></i>
      </div>
    </div>
  )
}

export default TopNav