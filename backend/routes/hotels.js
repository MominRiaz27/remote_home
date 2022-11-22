import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//create
router.post('/', verifyAdmin, createHotel)

//update
router.put('/:id', verifyAdmin, updateHotel)

//delete
router.delete('/:id', verifyAdmin, deleteHotel)

//read only one
router.get("/:id", getHotel)

//read All
router.get("/", getHotels)

export default router;