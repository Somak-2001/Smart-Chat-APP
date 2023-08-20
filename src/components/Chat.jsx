import React from 'react';
import Messages from './Messages';
import Input from './Input';
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { IoPersonAddSharp } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
const Chat = () => {
  return (
    <div className='chat_container'>
      <div className='chatInfo'>
      <div className='contactInfo'>
      <img src='https://th.bing.com/th/id/OIP.2svrXiC54e3ETDqB15I74wHaDt?w=329&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='prf pic'></img>
      <span>Jane Fostar</span>
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
