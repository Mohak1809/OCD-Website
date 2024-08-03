import express from "express";
import resource from "../models/resource.js"

const router=express.Router();

router.post("/",async (req,res)=>{
    const { title, link, category, description } = req.body;
    const result = await resource.create({
        title,
        link,
        category,
        description
    });
    console.log(result);
    return res.status(201).redirect("https://jaiyankargupta.github.io/OCD-Website/html/add-resource.html");
});

export default router;

