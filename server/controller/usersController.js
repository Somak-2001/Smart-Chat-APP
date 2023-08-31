//Register , Login Functionality is defined here
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
  try {

    //Destructuring the req body, data filled in the login form on front end 
    const { email, password } = req.body;

    //Finding a user who has the email from DB
    const user = await User.findOne({ email });

    //Here user is a object, if user is null then user doesn't exists
    if (!user)
      return res.json({ msg: "Incorrect Email or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
}

module.exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const usernameCheck = await User.findOne({ name });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10); //10 is salt value
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
}

module.exports.getAllUsers = async (req,res,next) => {
  try{
     
  }
  catch(ex){
    next(ex);
  }
}