import React, { useEffect, useRef, useState } from 'react'
import Login from './Login';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../styles/Home.scss';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);

  return (
    <>
    <Login/>
    {/* <div className='home'>
      <div className='main_container'>
        <Sidebar />
        <Chat />
      </div>
    </div> */}
    </>
  )
}

export default Home;
