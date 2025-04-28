import mongoose from 'mongoose';

const subtodoSchema=new mongoose.Schema({

    


},{timestamps:true})


export const Subtodos=mongoose.model("Subtodoes",SubtodoSchema)