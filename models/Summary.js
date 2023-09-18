import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const summarySchema=new Schema({
    text:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    publicId:{
        type:String,
        unique:true,
        default:uuidv4().slice(0,8),
    },
},{timestamps:true});

const Summary=mongoose.model("Summary",summarySchema);

export default Summary;