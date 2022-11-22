import User from "../models/User.js"
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config();



export const register = async (req,res,next) => { 
    
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password:hash,
        })
        console.log(" before await ")
        await newUser.save();
        res.status(200).send(" User Has Been Created ")
    } catch (err) {
        next(err)
    }
}


export const login = async (req,res,next) => { 
    

    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404," User Not Found "))
         
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        
        if(!isPasswordCorrect) return next(createError(400," Wrong Password || User Name "))
        const {password, isAdmin, ...otherDetails} = user._doc;

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT)


        console.log(otherDetails)
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).send(otherDetails)
    } catch (err) {
        next(err)
    }
}

