import express from 'express';
import { addNewPost, deletePost, getAllPost, getUserPosts, updatePost } from '../controllers/post.js';
import { user } from '../models/user.js';

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
        const allPosts = await getAllPost();
        if (allPosts.length > 0) {
            return res.status(200).json({
                data: allPosts
            })
        }
        return res.status(404).json({
            data: "No data found"
        })

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
});

//TODO need to change user id dynamic
router.get("/user/all", async (req, res) => {
    try {
        const userId = '667252f6e9a3ddbf11b21514';
        const allPosts = await getUserPosts(userId);
        if (allPosts.length > 0) {
            return res.status(200).json({
                data: allPosts
            })
        }
        return res.status(404).json({
            data: "No data found"
        })

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
});

//TODO need to change user id dynamic
// add new post
router.post("/add", async (req, res) => {
    try {
        const userId = '667252f6e9a3ddbf11b21514';
        const currentDate = new Date().toJSON().slice(0,10);
        const newPost = await addNewPost(req, currentDate,userId);
        if (newPost) {
            return res.status(200).json({
                data: newPost,
                message:"Added successfully"
            })
        }
        return res.status(400).json({
            data: "Add failed"
        })

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
});

//UPDATE
router.put("/user/edit/:id", async (req, res) => {
    try {
        const updatedPost = await updatePost(req);
        if (updatedPost) {
            return res.status(200).json({
                message:"Updated successfully",
                data:updatePost
            })
        }
        return res.status(400).json({
            data: "Update failed"
        })

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
});

//DELETE
router.delete("/user/delete/:id", async (req, res) => {
    try {
        const newPost = await deletePost(req.params.id);
        if (newPost) {
            return res.status(200).json({
                message:"Deleted successfully"
            })
        }
        return res.status(400).json({
            data: "delete failed"
        })

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
});

export const postRouter = router;