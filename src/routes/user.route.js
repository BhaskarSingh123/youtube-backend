import { Router } from "express";
import registerUser from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"

const router=Router()
//for file handle of avater and image with the help of multer middleware
router.route("./register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

export default router