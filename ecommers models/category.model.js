import mongoose from 'mongoose';

const categorySchema=new category.Schema({

    name:{
        type:String,
        required:true,
    },



},{timestamps:true})


export const category = mongoose.models("Category", categorySchema)