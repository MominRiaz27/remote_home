import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";

import { createBooking, getBooking, deleteBooking } from "../controllers/booking.js";
const router = express.Router();


//create
router.post('/', createBooking)


//read All
router.get("/", getBooking)

//Delete
router.delete("/:id", deleteBooking)

export default router;