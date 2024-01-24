import React from 'react'
import {Outlet} from 'react-router-dom'
import DashbordNavigation from './DashbordNavigation'

function DashbordContent() {
  return (
    <div style={{padding:'20px'}}>
      <DashbordNavigation/> <hr /> 
        <Outlet/>
    </div>
  )
}

export default DashbordContent
