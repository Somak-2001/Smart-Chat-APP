import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoPrf from '../assets/demoprf.png';
import { toast } from 'react-hot-toast';
import { useUserContext } from '../provider/UserContextProvider';
const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser,setCurrentUser} = useUserContext();
  const Signout = ()=>{
    setCurrentUser(null);
    localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY);
    toast.success("Log Out");
    navigate('/login');
  }

  return (
    <div className='navbar_conatiner'>
     <div className='profile'>
      <span className='logo'>Smart Chat</span>
      <div className='user'>

      {
        currentUser?.isprofileImageSet && <img src='https://images.pexels.com/photos/6543272/pexels-photo-6543272.jpeg?auto=compress&cs=tinysrgb&w=600' alt='user dp' className='user_image'></img>
      }

      {
        !currentUser?.isprofileImageSet && <img src={DemoPrf} alt='user dp' className='user_image'></img>
      }
      
        {/* <span className='user_name'>hello</span> */}
        <span className='user_name'>{currentUser?.name}</span>
        <button className='log_out_button' onClick={Signout}>Log Out</button>
      </div>
     </div> 
    </div>
  )
}

export default Navbar;
