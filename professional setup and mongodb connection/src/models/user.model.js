import mongoose from 'mongoose';

const  userSchema=new Schema({})

export const User=mongoose.model("User",userSchema)