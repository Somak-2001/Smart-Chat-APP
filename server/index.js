const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");
const socket = require("socket.io");
const app = express();
// const socket = require("socket.io");
require('dotenv').config()

app.use(cors());
app.use(express.json());


// '/api/auth' is the static path, which will redirect to userRoutes
app.use("/api/auth",userRoutes);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

// const io = socket(server,{
//   cors:{
//     origin: "http://localhost:3000",
//     credentials : true,
//   }
// });


//This is a global var to store list of online users
// global.onlineUsers = new Map();

// io.on("connection",(socket)=>{
//   global.chatSocket = socket;

//   socket.on("add-user",(userId)=>{
//     onlineUsers.set(userId,socket.id);
//   })

//   socket.on("send-msg",(data)=>{
//     const sendUserSocket = onlineUsers.get(data.to);
//     if(sendUserSocket){
//        socket.to(sendUserSocket).emit('msg-recieve',data.msg);
//     }
//   })
// })

