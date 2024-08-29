import express from "express";
const router = express.Router();
import {
  roomPublishController,
  roomPublishFinder,
} from "../../controllers/publishController.js";

router.post("/publish/room", roomPublishController);
router.post("/publish/room/find", roomPublishFinder);
export default router;
