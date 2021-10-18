const express = require('express');
const connect = require('./config/db')

const postController = require("./controllers/post.controller")

const app =express();
app.use(express.json());

app.use("/posts",postController);

const start = async()=>{
    await connect();

    app.listen(2244,()=>{
        console.log("Deepak")
        console.log("listening on port 2244....");
    })
}


module.exports = start;