import React from 'react';
import Image from '../images/prf.jpg'
const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://images.pexels.com/photos/6543272/pexels-photo-6543272.jpeg?auto=compress&cs=tinysrgb&w=600' alt='owner' />
        <p>Just Now</p>
      </div>
      <div className='messageContent'>
        <span>Good morning</span>
        <img src={Image} alt='content pic'></img>
      </div>
    </div>
  )
}

export default Message;
