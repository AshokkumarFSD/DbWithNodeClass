import { post } from "../models/post.js";
import { user } from "../models/user.js";

export function getAllPost(){
    return post.find().populate("user","userName");
}

export function getUserPosts(userId){
    return post.find({user:userId}).populate("user","userName email");
}

export function addNewPost(req,currentDate,userId){
    return new post({
        ...req.body,
        date:currentDate,
        user:userId
    }).save();
}

export function deletePost(postId){
    // return post.deleteOne({_id:postId});
    return post.findByIdAndDelete({_id:postId});
}

export function updatePost(req){
    return post.findOneAndUpdate(
        { _id: req.params.id }, 
        { $set: req.body }, 
        { new: true });
}