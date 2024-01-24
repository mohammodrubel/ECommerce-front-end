import React from 'react'
import dashbordLogo from '../../img/img logo.jpg'

function DashbordNavigation() {
  return (
    <div className='dashbordNavbarinfo'>
        <div>
            <input type="text" className='bg-white p-2 rounded-md' placeholder='Search...' />
        </div>
        <img style={{width:"60px",height:'60px',borderRadius:'50%'}} src={dashbordLogo} alt="" />
    </div>
  )
}

export default DashbordNavigation
