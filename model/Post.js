const mongoose = require ('mongoose');

const postschema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});


module.exports=mongoose.model('gate',postschema)