import React, { useEffect } from 'react'
import '../styles/Login.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from '../utils/APIRoutes';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const currentUser = 
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "system",
  };

  const validateForm = () => {
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleLogIn= async (e) => {
    e.preventDefault();
    if (validateForm()) {

      //Sending input fields to backend api route
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });

      //Checking the result status returned from back-end
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  }
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='title'>
          <h1>Smart Chat</h1>
          <p>Login</p>
        </div>
        <form className='form-body' onSubmit={handleLogIn}>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>

          <button className='login-button' type='submit' onSubmit={handleLogIn}>Log In</button>
        </form>
        <div className='form-footer'>
          <span>Don&apos;t have an account? <Link to='/register'>Register</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login;
