import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginForm = ()=> {
    console.log(email, password)  
  }
  return (
    <div className='login'>
    <input type='email' className='input' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} />
    <input type='password' className='input' placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} />
    <button type='button' className='btn' onClick={loginForm}>Login</button>
      
    </div>
  )
}
