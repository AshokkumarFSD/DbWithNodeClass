import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    questions:{
        type:Array,
        required:true
    },
    user:{
        type:ObjectId,
        ref:"user"
    },
    location:{
        type:String,
        required:true
    },
});

const post = mongoose.model("post",postSchema);
export {post};