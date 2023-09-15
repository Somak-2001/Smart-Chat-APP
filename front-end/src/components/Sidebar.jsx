import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { allUsersRoute } from '../utils/APIRoutes';
import { useUserContext } from '../provider/UserContextProvider';
import { toast } from 'react-hot-toast';
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
      if (currentUser) {
        axios.get(`${allUsersRoute}/${currentUser._id}`)
        .then((data)=>{
          // data.map((item)=>{
          //   if(!contacts.includes(item)){
          //     setContacts([...contacts,item]);
          //   }
          // })
          setContacts(data.data);
        })
        .catch((err)=>{
          toast.error(err);
        });
      }
      else {
        navigate('/login');
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
