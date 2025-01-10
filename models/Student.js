const mongoose=require('mongoose')
const validator=require('validator')
const studentSchema=new mongoose.Schema( {
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true// pour enlever les espaces au debut et au fin

    },
    age:{
        type:Number,
        required:[true,'age is required'],
    },
    email:{
        type:String, // mouna123@gmail.com "hjgjhj44!!"
        required:[true,'email is required'],
        unique:true,
        validate:[validator.isEmail,"Invalid Email"]
    },
   
    
},{timestamps:true} )
module.exports=mongoose.model('Student',studentSchema)