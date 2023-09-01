import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { allUsersRoute } from '../utils/APIRoutes';
import { useUserContext } from '../provider/UserContextProvider';
const Sidebar = () => {
  const navigate = useNavigate();
  const {currentUser,contacts,setContacts} = useUserContext();

  // useEffect(()=>{
  //   const unsub =async ()=>{
  //      const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
  //      if(user){
  //       setCurrentUser(user);
  //      }
  //   }
  //   return ()=>{
  //     unsub();
  //   }
  // },[]);

  useEffect(() => {
    const unsub = async () => {
      if (currentUser) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      }
      else {
        navigate('/login');
      }
    }
    return () => {
      unsub();
    }

  }, [currentUser]);
  return (
    <div className='sidebar_container'>
    <Navbar />
    <Search />
    <Chats />
    </div>
  )
}

export default Sidebar;
