let posts=[];

export async function savePosts(req,res){
    const body=req.body;
    posts.push(body);
    res.json(body).status(201);
}
export async function getAllPosts(re, res){
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