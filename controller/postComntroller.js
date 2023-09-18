import Summary from "../models/Summary.js";
import { fetchSummary } from "../util/generateSummary.js";
import { v4 as uuidv4 } from 'uuid';
let posts=[];

export async function savePosts(req,res){
    //const newSummary={...req.body, id:uuidv4().slice(0,8)};
    //const body=req.body;
    //posts.push(body);
    const summary = new Summary({
        text: req.body.text,
        summary: req.body.summary,
      });
    
      await summary.save();
      res.json(summary).status(201);
    }
export async function getAllPosts(req, res){
    res.json(posts);
}

export async function updatePost(res,req){
    const postId=req.params.id;
    const updatePost=req.body;
    const post =posts.findIndex((posts)=>posts.id===postId);
    if(post!==-1){
        posts[post]=updatePost;
        res.json(posts[post]);
    }else{
        res.setEncoding(404).json({message:"Post not found"});
    }
}

export async function deletePost(req,res){
    const postId=req.params.id;
    console.log(req.params.id);
    const post =posts.findIndex((posts)=>posts.id===postId);
    if(post!==-1){
        const deletePost=posts.splice(post,1);
        res.json({message:"Dleted"});
    }else{
        res.status(404).json({message:"Post not found"});
    }
}

export async function getPost(req,res){
    const postId=req.params.id;
    console.log(req.params.id);
    const post =posts.find((posts)=>posts.id===postId);
    if(post){
        res.json(post);
    }else{
        res.status(404).json({messege:"post not found"});
    }
}
export async function generateSummery(req,res){
    try {
        const generatedReply =await fetchSummary(req.body.text);
        res.status(200).json({data:generatedReply});
    } catch (error) {
       res.status(500).json({message: "Internal Server Error"}); 
    }
}