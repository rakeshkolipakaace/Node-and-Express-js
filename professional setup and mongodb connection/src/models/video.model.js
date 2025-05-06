import mongoose from 'mongoose'

import mongooseAggreatePaginate from 'mongoose-aggregate-paginate-v2'


const videoSchema= new Schema({

    videoFile:{
        type : String,
        required:true,


    },

    thumbnail:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,

    },

    description:{
        type:String,
        required:true,
    },

    duration:{
        type:Number,
        required:true,
    },

    views:{
        type:Number,
        default:0,
    },

    published:{
        type:Boolean,
        default:false,  
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }



},{
    timestamps:true,
})


videoSchema.plugin(mongooseAggreatePaginate)


export const Video=mongoose.model("Video",videoSchema)