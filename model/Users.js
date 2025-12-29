const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({

   
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['ADMIN','CUSTOMER'],
        default:'CUSTOMER',
        required:true
    }
})

const User=mongoose.model('User',UsersSchema)
module.exports=User