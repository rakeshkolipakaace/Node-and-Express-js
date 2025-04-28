import mongoose from 'mongoose';


const userSchema=new mongoose.Schema({


    username:{
        type:   String,
        rquuired:true,
        unique:true,
        lowercase: true
    },

    email:{
        type:String,
        rquired:true,
        unique:true,
        lowercase:true

    },

    password:{
        type: String,
        required:[true, "password is required"],
    }
},{timestamps:true})


export const user=mongoose.model("User",userSchema)