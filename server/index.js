const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");

const app = express();
const socket = require("socket.io");
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


app.get('/',(req,res)=>{
    res.send("HII");
})