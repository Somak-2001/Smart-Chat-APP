import React, { useEffect, useRef } from 'react'
import Login from './Login';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../styles/Home.scss';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../provider/UserContextProvider';
const Home = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const {currentUser,setCurrentUser} = useUserContext();

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
    {/* Hello
    <div>
      <span>How are you</span>
    </div> */}
      {!currentUser && <Login/>}
      {currentUser && <div className='home'>
        <div className='main_container'>
          <Sidebar />
          <Chat/>
        </div>
      </div>}
    </>
  )
}

export default Home;
