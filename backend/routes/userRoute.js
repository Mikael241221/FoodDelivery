import express from "express"
import { loginUser,registerUser } from "../controllers/userController"


const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

//export defaultly
export default userRouter;