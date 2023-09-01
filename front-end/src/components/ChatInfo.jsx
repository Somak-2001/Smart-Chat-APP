import React from 'react'
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { IoPersonAddSharp } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
import Messages from './Messages';
import Input from './Input';
import Demoprf from '../assets/demoprf.png';
import { useUserContext } from '../provider/UserContextProvider';
const ChatInfo = () => {
  const {currentUser} = useUserContext();
  return (
    <div>
      <div className='chatInfo'>
         <div className='contactInfo'>
          {
            (currentUser?.isprofileImageSet) &&
            <img src='https://th.bing.com/th/id/OIP.2svrXiC54e3ETDqB15I74wHaDt?w=329&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='prf pic'></img>
          }

          {
            !(currentUser?.isprofileImageSet) &&
            <img src={Demoprf} alt='prf pic'></img>
          }

          <span>{currentUser?.name}</span>
        </div>
        <div className='chatIcons'>
          <AiTwotoneVideoCamera size={20} />
          <IoPersonAddSharp size={20} />
          <FiMoreHorizontal size={20} />
        </div>
      </div>
      <Messages />
      <Input />  
    </div>
  )
}

export default ChatInfo
