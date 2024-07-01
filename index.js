import { dbConnection } from "./db.js";
import express from "express";
import { user } from "./models/user.js";
import { post } from "./models/post.js";
import { postRouter } from "./routes/post.js";
import dotenv from "dotenv";

dotenv.config();

dbConnection(process.env.MONGO_URL);

const PORT = process.env.PORT;
// initialize express
const app = express();

//to accpet the json
app.use(express.json());

//listen and active
app.listen(PORT,()=>{
    console.log(`listening at port : ${PORT}`);
})



app.use("/api/posts",postRouter);







//signup
app.post("/signup",async (req,res)=>{
   const newUser = await new user({...req.body}).save();
   if(!newUser){
    return res.json({error:"Error in user signup"})
   } 
   return res.status(201).json({data:newUser,message:"Added successfully"});
})

//post
app.post("/post",async (req,res)=>{
    const postData = {...req.body};
    postData.date = new Date().toJSON().slice(0,10);
    postData.user= '6677b8d9429fa26139b10e1c';
    const newPost = await new post(postData).save();
    if(!newPost){
     return res.json({error:"Error in post"})
    } 
    return res.status(201).json({data:newPost,message:"Post Added successfully"});
 })

 //get
app.get("/all/interview",async (req,res)=>{
    const allPost = await post.find();
    if(!allPost){
     return res.json({error:"Error in get interview"})
    } 
    return res.status(201).json({data:allPost,message:"Post interview data"});
 })