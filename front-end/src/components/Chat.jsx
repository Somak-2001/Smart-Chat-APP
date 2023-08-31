import React, { useEffect, useRef, useState } from 'react';
import Messages from './Messages';
import Input from './Input';
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { IoPersonAddSharp } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Socket, io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { host } from '../utils/APIRoutes';
import { allUsersRoute } from '../utils/APIRoutes';
import axios from 'axios';
const Chat = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState(null);
  useEffect(()=>{
     const unsub = async() =>{
         const user = await localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
         if(!user){
          navigate('/login');
         }
         else{
          setCurrentUser(JSON.parse(user));
         }
     }
     return ()=>{
        unsub();
     }
  },[])

  useEffect(()=>{
     const unsub = ()=> {
      if(currentUser){
        socket.current = io(host);
        socket.current.emit("add-uers",currentUser._id);
      }
     }

     return ()=>{
        unsub();
     }
  },[currentUser]);

  useEffect(()=>{
    const unsub = async() =>{
        if(currentUser){
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        }
        else{
          navigate('/login');
        }
    }
    return ()=>{
      unsub();
    }

  },[currentUser]);

  return (
    <div className='chat_container'>
      <div className='chatInfo'>
      <div className='contactInfo'>
      <img src='https://th.bing.com/th/id/OIP.2svrXiC54e3ETDqB15I74wHaDt?w=329&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='prf pic'></img>
      <span>{currentUser?.name}</span>
      </div>
        <div className='chatIcons'>
          <AiTwotoneVideoCamera size={20}/>
          <IoPersonAddSharp size={20}/>
          <FiMoreHorizontal size={20}/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
