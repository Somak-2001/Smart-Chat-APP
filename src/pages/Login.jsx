import React from 'react'
import '../styles/Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='title'>
          <h1>Smart Chat</h1>
          <p>Login</p>
        </div>
        <form className='form-body' onSubmit={handleLogIn}>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />

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
