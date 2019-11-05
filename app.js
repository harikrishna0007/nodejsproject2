const express = require ('express');
const app =  express();
const mongoose = require ('mongoose');
const bodyparser= require('body-parser');
app.use(bodyparser.json());
mongoose.connect('mongodb://127.0.0.1:27017/gateway',{useNewUrlParser:true,useFindAndModify:true,useCreateIndex:true,useUnifiedTopology: true},(err)=>{
    if(!err)
    console.log("connected to db.....");
    else{console.log("err");}
});

const reqpost=require('./routes/posts');

app.use('/posts',reqpost);


app.listen(3000,()=>{
    console.log("you are in localhost:3000")
})