import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoPrf from '../assets/demoprf.png';
const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState(null);

  useEffect(()=>{
    const unsub =async ()=>{
       const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
       if(user){
        setCurrentUser(user);
       }
    }
    return ()=>{
      unsub();
    }
  },[]);
  const Signout = ()=>{
    setCurrentUser(null);
    localStorage.clear();
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
