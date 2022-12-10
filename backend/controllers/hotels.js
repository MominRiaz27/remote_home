import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"
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
        console.log("inside get hotel")
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req,res,next) => {
    try {
        const hotels = await Hotel.find(req.query);
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}
export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const countByType = async (req,res,next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type:"Hotel"});
        const appartmentCount = await Hotel.countDocuments({type:"Appartment"});
        const villaCount = await Hotel.countDocuments({type:"Villa"});
        const resortCount = await Hotel.countDocuments({type:"Resort"});



        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"appartment", count:appartmentCount},
            {type:"villa", count:villaCount},
            {type:"resort", count:resortCount},
        ])
    } catch (err) {
        next(err)
    }
}

export const getHotelRooms = async (req, res, next) => {
    console.log("inside get rooms")
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };

