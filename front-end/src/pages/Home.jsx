import React from 'react'
// import Login from './Login';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../styles/Home.scss';
const Home = () => {
  return (
    <>
    {/* <Login/> */}
    <div className='home'>
      <div className='main_container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
    </>
  )
}

export default Home;
