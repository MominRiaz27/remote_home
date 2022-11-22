import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post('/:hotelid', verifyAdmin, createRoom)

//update
router.put('/:id', verifyAdmin, updateRoom)

//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

//read only one
router.get("/:id", getRoom)

//read All
router.get("/", getRooms)



export default router;