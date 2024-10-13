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


export const LoginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password ){
        res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }

    const verifyUser=await User.findOne({email});

    if(!verifyUser) return res.status(400).json({
        success:false,
        message:"User not found"
    });

    const verifyPassword=await bcrypt.compare(password,verifyUser.password);

    if(!verifyPassword){
        res.status(400).json({
            success:false,
            message:"Invalid email or password"
        })
    }

    console.log(verifyUser._id,verifyUser.email,verifyUser.role);

    const token=jwt.sign({
        id:verifyUser._id,
        email:verifyUser.email,
        role:verifyUser.role
    },"Chai_aur_code",{expiresIn:"60m"});

    console.log("token",token);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // false for http (development)
        sameSite: 'Lax',
        maxAge: 3600000 // 1 hour
      });
 
      console.log("Cookie set:", res.getHeader('Set-Cookie'));
 
      return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
          email: verifyUser.email,
          role: verifyUser.role,
          username:verifyUser.username,
          id: verifyUser._id,
        },
      });



    
})

export const LogoutUser=asyncHandler(async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        success:true,
        message:"User logged out successfully"
    })
});



//auth-middleware

export const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token;
    console.log("token",token);
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
  
    try {
      const decoded = jwt.verify(token, "Chai_aur_code");
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
    }
  });





