import React, {useState, createContext, useContext} from "react";

export const userContext = createContext();

const UserContextProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState(null);

    const value = {
        currentUser,
        setcurrentUser
    };

    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
}
export default UserContextProvider;

export const useUserContext = () => useContext(userContext);
