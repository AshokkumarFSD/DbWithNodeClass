import mongoose from "mongoose";

// const MONGO_URL = 'mongodb://127.0.0.1:27017/interview';
// const MONGO_URL = 'mongodb+srv://ashok:Ashok9952@cluster0.m9dbz9y.mongodb.net/';


export function dbConnection(MONGO_URL) {
    try {
        mongoose.connect(MONGO_URL)
        console.log("-- db connected -------");
    } catch (error) {
        console.log("Db Connection error: ", error);
    }
}