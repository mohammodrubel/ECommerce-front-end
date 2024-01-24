import React, { useState } from 'react';
import { useRegistrationMutation } from '../../App/featchers/authinticationFeatchers/authApi';
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'sonner'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registration, { isLoading, isSuccess, isError, data }] = useRegistrationMutation();
  const navigate = useNavigate();

  

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      return alert('All fields are required!');
    }

    const checkPassword = password === confirmPassword;
    if (!checkPassword) {
      return alert('Passwords do not match');
    }
    const res = await registration({ email, password }).unwrap();
    toast.success(res?.message)
    navigate('/login')
  };
  
  


  return (
    <div className='mx-auto container'>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='p-2 mt-4 border w-full'
            placeholder='Input Your Email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='p-2 mt-4 border w-full'
            placeholder='Input Your Password'
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='p-2 mt-4 border w-full'
            placeholder='Confirm Password Password'
          />
          <button type='submit' disabled={isLoading} className='border p-2 mx-5 mt-5'>
            Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
