import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";


const userAuthentication= asyncHandler(async(req,res,next)=>{
    
    let token;
    token=req.cookies.jwtuser;
    console.log(token)

    if(token){
        try{
            const decode= jwt.verify(token,process.env.JWT_SECRET)
            req.user=await User.findById(decode.userId).select('-password');
            next()

        }catch(error){
            res.status(401);
            throw new error("not authorised,invalid token");
        }
    }else{
        res.status(401);
        throw new Error('not authorized, no token');
    }
})

export{
    userAuthentication
}