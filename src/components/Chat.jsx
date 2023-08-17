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
      <span>Jane Fostar</span>
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
