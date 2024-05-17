import { logInUser, logOutUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser
);
router.route("/logIn").post(logInUser);
router.route("/logOut").post(verifyJWT, logOutUser);
router.route("/refreshAccessToken").post(refreshAccessToken);

export default router;
