const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
    type: String,
    required: true,
    min: 8,
    },
    isprofileImageSet: {
        type: Boolean,
        default: false,
      },
    profileImage: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Users", userSchema);