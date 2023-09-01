import React from 'react'
import Robot from '../assets/robot.gif';
import { useUserContext } from '../provider/UserContextProvider';
const Welcome = () => {
    const {currentUser} = useUserContext();
    return (
        <div>
            <img src={Robot} alt='Robot Gif' />
            <div className='context'>
                <h2>Welcome, <i>{currentUser.name}.</i></h2>
                <span><i>Send and Receive messages with the help of Smart Chat App</i></span><br />
            </div>
        </div>
    )
}

export default Welcome
