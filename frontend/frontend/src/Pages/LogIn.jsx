import React from 'react'
import Button from '../Components/button'
import { useState } from 'react';
import axios from 'axios';

const LogIn = ({handleLogin, setView}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleSubmit =async (e) => {
    e.preventDefault();
    handleLogin({email,password});
    console.log('Form submitted');
    const response = await axios.post(`http://localhost:3001/employees/login`, {email,password})
    const result = response.data;
    console.log(result)
    setEmail('');
    setPassword('')
  };
  const switchToRegistration = () => {
    setView('registration');
}
 
  
  return (
    <>
    <div className='h-screen w-screen bg-[#0e2d49] flex justify-center items-center'>
        <div className='h-50vh w-50vw border-2 px-10 py-10 rounded-md'>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='p-2 rounded-md'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='p-2 rounded-md'/>
                <div className='flex justify-center'>
                    <Button />
                </div>
                <p className='text-white text-sm'>
                        Don't have an account? 
                        <span onClick={switchToRegistration} className='text-[#fff] cursor-pointer'> Register</span>
                    </p>
            </form>
        </div>
    </div>
    </>
  )
}

export default LogIn
