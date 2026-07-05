import express from "express";
import userController from "../controllers/user.controllers.js";
import upload from "../middleware/multer.middleware.js";

const uploadAvatar = upload.single("avatar");

const router = express.Router();

router.post(
  "/register",
  uploadAvatar,
  userController.registerUser,
);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

export default router;
