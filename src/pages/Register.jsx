import React from 'react'
import '../styles/Register.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineUserAdd} from 'react-icons/ai'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file,setFile] = useState(null);

    const handleRegister=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='title'>
                    <h1>Smart Chat</h1>
                    <p>New User Register</p>
                </div>
                <form className='form-body' onSubmit={handleRegister}>
                    <input type='text'   value={name} onChange={e=> setName(e.target.value)} placeholder='Enter your name' />
                    <input type='email'  value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter email' />
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Set Password' />
                    <input type='file' id='file' className='file-input' value={file} onChange={e=> setFile(e.target.value)} />
                    <label htmlFor='file' className='avatar-container'>
                        <AiOutlineUserAdd className='avatar'/>
                        <span className='avatar-text'>Add an Avatar</span>
                    </label>

                    <button className='register-button' type='submit' onSubmit={handleRegister}>Sign Up</button>
                </form>
                <div className='form-footer'>
                   <span>Yo do have an account? <Link to='/login'>Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Register;
