import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token) {
        console.log("inside token")
        return next(createError(401," You're Not Authenticated! "))
    }

    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err){
        next(createError(403, " Token is not verified "))
        }
        req.user = user;
        next()
    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError( 403," You're not Authorized "))
        }
    })
}

export const verifyAdmin = (req, res, next)=>{
    console.log("inside admin")
    verifyToken(req,res,next,() =>{
        if(req.user.isAdmin){
            console.log("condition 1")
            next()
        }else{
            console.log("condition 2")
            return next(createError( 403," You're not Authorized "))
        }
    })
}