import express from "express";
import { registerUser,authUser,logoutUser,userValidation} from "../controllers/userController.js";
import { userAuthentication } from "../middlewares/authMiddleware.js";

const router=express.Router()

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.get('/validate',userAuthentication,userValidation)


export default router;