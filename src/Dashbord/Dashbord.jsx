import React from 'react'
import '../Style/Dashbord.css'
import SideBar from './DashbordNavbar/SideBar'
import DashbordContent from './DashbordNavbar/DashbordContent'

function Dashbord() {
  return (
    <div className='dashbord'>
        <div className='AppGlass'>
          <SideBar/>
          <DashbordContent/>
        </div>
    </div>
  )
}

export default Dashbord
