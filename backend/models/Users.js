const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    ModelName :String,
    Brand :String, 
    Id:Number,
    Price :Number ,
    Size : Number
});

const UserModel= mongoose.model("users", UserSchema);
module.exports = UserModel;