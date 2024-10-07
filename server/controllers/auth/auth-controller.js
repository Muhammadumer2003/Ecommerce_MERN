import bcrypt from "bcrypt";
import User from "../../Models/Users/user-model.js";
import jwt from "jsonwebtoken";
import {asyncHandler} from "../../utils/AsyncHandler.js";
export const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(email, password, username);

    if(!username || !email || !password) return res.status(400).json({
        success:false,
        message:"All fields are required"
    })

        const existingUser=await User.findOne({$or:[{email},{username}]});
        if(existingUser) return res.status(400).json({
            success:false,
            message:"User already exists"
        })
        const hashPassword= await bcrypt.hash(password,10); 
        const newUser=new User({username,email,password:hashPassword});
        await newUser.save();

        res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user:newUser
        })

  
    

});


