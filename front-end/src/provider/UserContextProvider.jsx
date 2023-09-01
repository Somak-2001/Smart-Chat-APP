import React, { useState, createContext, useContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [contacts, setContacts] = useState([]);

    const initialState = {
        currentUser, 
        setCurrentUser, 
        currentChat, 
        setCurrentChat, 
        contacts, 
        setContacts
    }

    return (
        <UserContext.Provider value={initialState}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
