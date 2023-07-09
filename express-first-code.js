// make home,about,contact page by using express

const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("Hello !!! Welcome on HOME Page")
});

app.get('/about',(req,res)=>{
    res.send("Hello !!! Welcome on About Page")
});

app.get('/contact',(req,res)=>{
    res.send("Hello !!! Welcome on contact Page")
});

app.listen(5000);