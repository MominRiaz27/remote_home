import Booking from "../models/Booking.js"

export const createBooking = async (req,res,next)=>{
    const newUser = new Booking(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}



export const deleteBooking = async (req,res,next) => {
    console.log(req.params.id)
    try {
        await Booking.findByIdAndDelete(req.params.id)
       res.status(200).json("User is deleted")
   } catch (err) {
        next(err)
    }
}



export const getBooking = async (req,res,next) => {
    try {
        const Users = await Booking.find();
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}

