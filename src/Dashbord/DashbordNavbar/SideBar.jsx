import React from 'react'
import dashbordSidebarMenuData from './MenuData'
import { Link, NavLink } from 'react-router-dom'

function SideBar() {
  
  return (
    <div className='sidebar'>
        <div className='logo'>
            <h3 className='text-2xl font-bold '>Dashbord</h3>
        </div>
        <div className='menu'>
            <ul className='dashbordMenu'>
                {
                  dashbordSidebarMenuData.map((item,index)=>{
                    return <li>
                    <NavLink className='dashbord_link'to={item.link}>
                      <i className={item.icon}></i>
                        <span>{item.title}</span>
                    </NavLink>
                  </li>
                  })
                }
            </ul>
        </div>
    </div>
  )
}

export default SideBar
