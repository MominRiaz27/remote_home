import Hotel from "../models/Hotel.js"

export const createHotel = async (req,res,next)=>{
    const newhotel = new Hotel(req.body)
    try {
        const savedhotel = await newhotel.save()
        res.status(200).json(savedhotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req,res,next) => {
    try {
        const updatedhotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedhotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req,res,next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("Hotel is deleted")
   } catch (err) {
        next(err)
    }
}

export const getHotel = async (req,res,next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req,res,next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

