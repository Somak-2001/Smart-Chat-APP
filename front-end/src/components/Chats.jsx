import React from 'react';
import Demoprf from '../assets/demoprf.png';
import { useUserContext } from '../provider/UserContextProvider';
const Chats = () => {
  const { contacts, setCurrentChat } = useUserContext();
  const selectedContact = (item, idx) => {
    if (item) {
      setCurrentChat(item);
    }
  }
  return (
    <div className='chats'>
      {//Display all users at sidebar who ar,setregsitered in SmartApp
        {/* console.log(contacts) */}
      }
      {(contacts.length > 0) && contacts.map((item, idx) => {
        return (
          <div className='find_user' key={item._id} onClick={() => { selectedContact(item, idx) }}>
            !(item.isprofileImageSet) && <img src={Demoprf} alt='Find contact' className='img_find_user'></img>
            (item.isprofileImageSet) && <img src={item.
              profileImage} alt='Find contact' className='img_find_user'></img>
            <div className='user_info'>
              <p className='name'>{item.name}</p>
              <span className='message'>Hello</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Chats;
