import express from "express";
import resource from "../models/resource.js";

const router=express.Router();

router.get("/",async (req,res)=>{
    const resources = await resource.find({});
    res.json(resources);
})

export default router