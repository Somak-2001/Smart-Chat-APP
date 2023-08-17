import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar_conatiner'>
     <div className='profile'>
      <span className='logo'>Smart Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/6543272/pexels-photo-6543272.jpeg?auto=compress&cs=tinysrgb&w=600' alt='user dp' className='user_image'></img>
        <span className='user_name'>Somak Poddar</span>
        <button className='log_out_button'>Log Out</button>
      </div>
     </div> 
    </div>
  )
}

export default Navbar;
