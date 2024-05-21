import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


useEffect(()=>{
const auth = localStorage.getItem('user')
 if(auth){
  navigate("/")
 }
},[])

  const loginForm = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
     localStorage.setItem('user', JSON.stringify(result));
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div className="login">
      <input
        type="email"
        className="input"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="input"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" className="btn" onClick={loginForm}>
        Login
      </button>
    </div>
  );
}
