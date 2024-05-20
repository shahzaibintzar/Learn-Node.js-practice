import React, { useState } from 'react'

export default function SignUp() {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

const getData = () => {
    console.log(name,email,password)
}
  return (
    <div className='register'>
    <h3>SignUp</h3>
    <input className='input' type='text' value={name} onChange={(e)=>SetName(e.target.value)} placeholder='Enter Your Name'/>
    <input className='input' type='email' value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder='Enter Your Email'/>
    <input className='input' type='password' value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder='Enter Your Password'/>
    <button className='btn' type='button' onClick={getData}>Sign Up</button>
    </div>
  )
}
