import React, { useEffect, useRef, useState } from 'react'
import Login from './Login';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../styles/Home.scss';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContextProvider';
const Home = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    const unsub = async () => {
      const user = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      if (!user) {
        navigate('/login');
      }
      else {
        setCurrentUser(user);
      }
    }
    return () => {
      unsub();
    }
  }, [currentUser])

  return (
    <>
      {!currentUser && <Login/>}
      {currentUser && <div className='home'>
        <div className='main_container'>
          <Sidebar />
          <Chat />
        </div>
      </div>}
    </>
  )
}

export default Home;
