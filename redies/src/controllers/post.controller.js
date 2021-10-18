const express = require('express');

const router = express.Router();

const client = require("../config/redies")
const post = require("../models/post.model")

router.get("/",async (req,res)=>{

    client.get("posts", async (err,posts)=>{
       if(err) return res.status(500).json({status:"failed",message:err.message})
       if(posts) return res.status(200).json({status:"success",posts:JSON.parse(posts)})

       try{
        const posts = await Post.find({}).lean().exec()
        client.set("posts", JSON.stringify(posts));
        es.status(200).json({status:"success",posts})
    } catch(err){
        return res.status(500).json({status:"failed",message:err.message})
    }
    })
})
module.exports = router;