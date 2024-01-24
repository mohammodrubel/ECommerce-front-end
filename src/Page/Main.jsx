import React from 'react'
import {Outlet} from 'react-router-dom'
import { Toaster } from 'sonner'
import Navigation from '../Components/Navigation/Navigation'
import SecondNavbar from '../Components/Navigation/SecondNavbar'

function Main() {
  return (
    <div className='container mx-auto'>
      <Navigation/>
      <SecondNavbar/>
      <Outlet/>
      <footer>this is footer</footer>
      <Toaster position="top-right" richColors />
    </div>
  )
}

export default Main
