//This is host used to connect to server
export const host = "http://localhost:5500";

//Register route is redirected to server route
export const registerRoute = `${host}/api/auth/register`; 
export const loginRoute = `${host}/api/auth/login`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;