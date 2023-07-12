// Rendering HTML and Routing in Node JS

const express=require('express');
const app=express();

app.get("",(req,res)=>{
    
    res.send(
        `
        <h1>home page<h1>
        <a href="/about">go to about page</a>
        `)
       
});

app.get("/about",(req,res)=>{
    
    res.send(
        `
        <h1>about page<h1>
        <a href="/">go to home page</a>
        `)
       
});


app.listen(5000)