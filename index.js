require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("hello dashboard");
})
app.get('/login',(req,res)=>{
    res.send("<h1>Enter require details to login</h1>");
})
app.get("/dasboard",(req,res)=>{
    res.send("<h2>welcome to dashboard please wait to signup</h2>")
})
app.listen(port,()=>{
    console.log(`Port is running at ${port}`);
})