import express from "express";
const router = express.Router();
import { filterController } from "../../controllers/filterController.js";

router.post("/controll", filterController);
export default router;
