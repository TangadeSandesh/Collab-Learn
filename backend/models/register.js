const mongoose=require("mongoose");

const usersSchema= new mongoose.Schema({
    name :String,
    email:String,
    password:String,
    role: String
})

//now we create collections

const RegisterModel=new mongoose.model("users",usersSchema);
module.exports=RegisterModel;