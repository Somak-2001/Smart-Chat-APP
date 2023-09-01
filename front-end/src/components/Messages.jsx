import React from 'react'
import Message from './Message';
import { useUserContext } from '../provider/UserContextProvider';
const Messages = () => {
  const {currentUser} = useUserContext();
  return (
    <div className='message_container'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
