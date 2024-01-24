import React from 'react'
import { useSelector } from 'react-redux'
import { currentToken } from '../App/featchers/authinticationFeatchers/authSlice'
import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {
    const token=useSelector(currentToken)
    if(!token){
        return <Navigate to='/login' replace={true} />
    }
    console.log(token)
  return children
}

export default ProtectedRoute