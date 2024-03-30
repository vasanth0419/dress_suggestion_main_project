import express from "express";
import {
  deleteUserById,
  forgetPassword,
  getUserById,
  loginUser,
  registerUser,
  resetPassword,
  userapi,
} from "../Controller/User.controller.js";

const router = express.Router();

router.get("/", userapi);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuserbyid/:userid", getUserById);
router.post("/forgetpassword", forgetPassword);
router.put("/resetpassword/:token", resetPassword);
router.delete("/deleteuser/:userId", deleteUserById);
export default router;
