const express = require("express");
const {reguser} = require("./model.js");
const {loguser} = require("./model.js");

const bcrypt = require('bcryptjs');
const verifyToken = require("./auth.js"); // path to your auth middleware





const router = express.Router();

router.get("/register",async (req,res)=>{
    
    res.send("hiii");
});


router.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    const data = await loguser(email,pass);
    const token = data;
    res.send(data);
});

router.get("/dash",verifyToken,async(req,res)=>{
    


    


})
