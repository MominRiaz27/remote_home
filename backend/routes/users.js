import express from "express"
import { createUser, updateUser, deleteUser, getUser, getUsers } from "../controllers/users.js";
import { verifyUser, verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get('/checktoken', verifyToken, (req,res,next)=>{
//     res.send(" hello user, you're logged in ")
// })

// router.get('/checkrole/:id', verifyUser, (req,res,next)=>{
//     res.send(" hello user, you can delete account ")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req,res,next)=>{
//     res.send(" hello Admin, you can delete any account ")
// })


//create
router.post('/', createUser)

//update
router.put('/:id',verifyUser, updateUser)

//delete
router.delete('/:id', verifyUser, deleteUser)

//read only one
router.get("/:id", verifyUser, getUser)

//read All
router.get("/", verifyAdmin, getUsers)



export default router;