const express = require ('express');

const router=express.Router();

const Student = require('../model/Post')

router.get('/',(req,res)=>{
 //  res.send("we are on ...");
   Student.find((err,docs)=>{
    if(!err){res.send(docs);}
    else{console.log('error'+ JSON.stringify(err,undefined,2));}
   });
});

router.post('/',(req,res)=>{
    console.log(req.body);
    const stu = new Student({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    });

    stu.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error'+ JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;