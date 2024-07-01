import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        maxLength:32,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
});

const user = mongoose.model("user",userSchema);
export {user};