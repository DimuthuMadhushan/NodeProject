import { Router } from "express";
import { deletePost, getAllPosts, getPost, savePosts, updatePost } from "../controller/postComntroller.js";

const postRouter=Router();


postRouter.route("/").post(savePosts).get(getAllPosts);

postRouter.route("/:id").delete(deletePost).put(updatePost).get(getPost);
export default postRouter;