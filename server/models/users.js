const mongoose = require('mongoose');

const usersschema = mongoose.Schema({
    username: String,
    fullname:String,
    email:String,
    password:String,

})

const usersmodel = mongoose.model("Users",usersschema)
module.exports= usersmodel;