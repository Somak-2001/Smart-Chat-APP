import React, { useEffect, useRef, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { host } from '../utils/APIRoutes';
import { allUsersRoute } from '../utils/APIRoutes';
import axios from 'axios';
import Welcome from './Welcome';
import ChatInfo from './ChatInfo';
import { useUserContext } from '../provider/UserContextProvider';


const Chat = () => {
  const {currentUser,contacts,setContacts} = useUserContext();
  const navigate = useNavigate();
  const socket = useRef();
  // useEffect(() => {
  //   const unsub = async () => {
  //     const user = await localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
  //     if (!user) {
  //       navigate('/login');
  //     }
  //     else {
  //       setCurrentUser(JSON.parse(user));
  //     }
  //   }
  //   return () => {
  //     unsub();
  //   }
  // }, [])

  // useEffect(() => {
  //   const unsub = () => {
  //     if (currentUser) {
  //       socket.current = io(host);
  //       socket.current.emit("add-uers", currentUser._id);
  //     }
  //   }

  //   return () => {
  //     unsub();
  //   }
  // }, [currentUser]);

  // useEffect(() => {
  //     if (currentUser) {
  //       axios.get(`${allUsersRoute}/${currentUser._id}`)
  //       .then((data)=>{
  //         // setContacts(data.data);
  //         console.log(data.data);
  //       });
  //     }
  //     else {
  //       navigate('/login');
  //     }
  //   }, [currentUser]);

  return (
    <div className='chat_container'>
      { !(contacts) && <div className='welcome-page'>
          <Welcome />
        </div>
      }
     {
      contacts && <ChatInfo />
     }
    </div>
  )
}

export default Chat;
