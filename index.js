// Making HTML Pages

const express=require('express');
const path=require('path')

const app=express();
const pagesPath=path.join(__dirname,'pages')



app.use(express.static(pagesPath));// use ==> express js func and middleware function


app.listen(5000)