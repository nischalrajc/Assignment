import jwt from "jsonwebtoken";

const generateToken=(res,userId)=>{
    // const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'30d'});
    // res.cookie('jwt',token,{
    //     httpOnly : true,
    //     secure : process.env.NODE_ENV !== 'development',
    //     sameSite:'strict',
    //     maxAge:30 * 24 * 60 * 60 * 1000
    // })

    const token = jwt.sign({userId},process.env.JWT_SECRET,
        {
            expiresIn:'30d'
        });
   
    res.cookie('jwtuser',token,
    {
        httpOnly:true,
        domain: 'localhost:3000',
        secure:process.env.NODE_ENV !== 'development',
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    
}

export {
    generateToken
}