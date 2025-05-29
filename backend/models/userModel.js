import mongoose from "mongoose";
// Define the schema for the user model
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

// Create a model from the schema
const userModel = mongoose.models.user || mongoose.model("user",userSchema)
export default userModel;