import React, { useEffect } from 'react'
import '../styles/Register.scss';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { registerRoute } from '../utils/APIRoutes';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [file, setFile] = useState(null);
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
        theme: "dark",
    };


    const handleValidation = () => {
        if (password !== confirmpassword) {
          toast.error(
            "Password and confirm password should be same.",
            toastOptions
          );
          return false;
        } else if (name.length < 3) {
          toast.error(
            "Username should be greater than 3 characters.",
            toastOptions
          );
          return false;
        } else if (password.length < 8) {
          toast.error(
            "Password should be equal or greater than 8 characters.",
            toastOptions
          );
          return false;
        } else if (email === "") {
          toast.error("Email is required.", toastOptions);
          return false;
        }
    
        return true;
      };

    const handleRegister = async (e) => {
        e.preventDefault();
        const valid = handleValidation();
        if(valid){
            //Sending input fields to backend api route
            const { data } = await axios.post(registerRoute, {
                name,
                email,
                password,
                profileImage: file,
            })
            
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
                    <p>New User Register</p>
                </div>
                <form className='form-body' onSubmit={handleRegister}>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' required />
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email' required />
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Set Password' required />
                    <input type='password' value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} placeholder='Confirm Password' required />
                    <input type='file' id='file' className='file-input' value={file} onChange={e => setFile(e.target.value)} />

                    <label htmlFor='file' className='avatar-container'>
                        <AiOutlineUserAdd className='avatar' />
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
