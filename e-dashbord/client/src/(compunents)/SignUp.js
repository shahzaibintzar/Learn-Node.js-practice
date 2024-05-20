import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:4000/register", {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            if (result) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className='register'>
            <h3>SignUp</h3>
            <input
                className='input'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name'
            />
            <input
                className='input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email'
            />
            <input
                className='input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password'
            />
            <button className='btn' type='button' onClick={getData}>Sign Up</button>
        </div>
    )
}
