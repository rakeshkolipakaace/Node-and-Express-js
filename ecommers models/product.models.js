import mongoose from 'mongoose';


 const ProductSchema=new mongoose.Schema({

    description:{
        type :String,
        required: true ,

    },


    name:{
        type: String,
        required: true,

    },


    productImage:{
        type: String,

    },

    price:{
        type: Number,
        default :0,
        
    },


    staock:{
        default:0,
        type:Number
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",

        required :true,
    },


    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
 },{timestamps:true})


 export const products=mongoose.model("Products",ProductSchema)