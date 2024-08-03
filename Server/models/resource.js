import mongoose from "mongoose";

const resourceschema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true,
        default:"Other"
    },
    description:{
        type:String,
        require:true
    }
},{timestamps:true});

const resource=mongoose.model("resource",resourceschema);

export default resource;