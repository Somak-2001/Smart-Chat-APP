import React from 'react'
import Message from './Message';
const Messages = ({currentUser}) => {
  // const owner=true;
  // const other=false;
  return (
    <div className='message_container'>
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
      <Message currentUser={currentUser} />
    </div>
  )
}

export default Messages
