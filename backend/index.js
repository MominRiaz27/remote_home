import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"


const app = express()
dotenv.config();
app.use(express.json())
app.use(cookieParser())

const connect = async ()=>{
    try {
    await mongoose.connect(process.env.MONGOPATH);
        console.log("connected to database")
    } catch (error) {
        throw(error)
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb Disconnected ")
})

mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected ")
})

app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errMessage = err.message || " something went wrong ";
    
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:err.errMessage,
        stack: err.stack
    })
})

app.listen(8000, ()=>{
    connect();
    console.log("connected to backend ")
})