import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true
    },

    password:{
        type: String,
        required:[true, "password is required"]
    }

})

export const User=mongoose.model("User",UserSchema)