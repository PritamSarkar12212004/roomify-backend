import express from "express";
const router = express.Router();

// require controller
import {
  registercontroller,
  logincontroller,
} from "../../controllers/authenticController.js";

/* GET home page. */
router.post("/register", registercontroller);
router.post("/login", logincontroller);
export default router;
