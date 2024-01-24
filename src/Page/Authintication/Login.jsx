import React, { useState } from 'react'
import { useLoginMutation } from '../../App/featchers/authinticationFeatchers/authApi'
import {useNavigate} from 'react-router-dom'
import {Toaster,toast} from 'sonner'
import {  useDispatch } from 'react-redux'
import { setUsers } from '../../App/featchers/authinticationFeatchers/authSlice'
import { verifyToken } from '../../utils/verifyToken'



function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData]=useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmitHendeler = async(e)=>{
        e.preventDefault();
        toast.loading('loading...')
        try{
            const res = await userData({email,password}).unwrap()
        const user = verifyToken(res?.data?.data?.accessToken)
        dispatch(setUsers({user:user,token:res?.data?.data?.accessToken}))
        toast.success(res?.message)
        navigate('/')
        }catch(error){
            toast.success(error?.message)
        }
    }
    

  return (
    <div className='mx-auto container'>
        <Toaster position="top-right" richColors />
        <div>
            <form onSubmit={onSubmitHendeler}>
                <input onChange={(e)=>setEmail(e.target.value)} type="email"className='p-2 border w-full mt-4' placeholder='Input Your Email' />
                <input onChange={(e)=>setPassword(e.target.value)} type="password"className='p-2 border w-full mt-4' placeholder='Input Your Password' />
                <button className='btn p-4 mt-5' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login