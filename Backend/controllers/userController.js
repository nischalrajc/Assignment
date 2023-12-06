import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import { generateToken } from "../utils/generateToken.js";

// --------User Registration----------

const registerUser=asyncHandler(async(req,res)=>{

    const {name,email,password}=req.body;

    const userExist = await User.findOne({ email });
    if(userExist){
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        generateToken(res,user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }

});


// ---------User Authentication--------

const authUser=asyncHandler(async(req,res)=>{
    
    const {email,password}=req.body

    const user = await User.findOne({email})
    
    if(user && (await user.matchPasswords(password))){
        generateToken(res,user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
});


// -----------User Logout-----------

const logoutUser = asyncHandler(async(req,res)=>{
    
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0),
    });

    res.status(200).json({ message: "User logged out"})
});


// ----------Validate User--------

const userValidation= asyncHandler(async(req,res)=>{
    if(!req.user){
        res.cookie('jwt','',{
            httpOnly:true,
            expires:new Date(0),
        });

        res.status(404);
        throw new Error('User not found')
    }

    res.status(200).json({
        status:"true"
      });
})

export{
    registerUser,
    authUser,
    logoutUser,
    userValidation
}