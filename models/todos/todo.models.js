import mongoose from 'mongoose';

todoSchema=new mongoose.Schema({






},{timestamps:true})


export const Todo=mongoose.model('Todo',todoSchema)