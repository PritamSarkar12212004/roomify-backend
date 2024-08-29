import express from "express";
const router = express.Router();

import {
  roomFinder,
  roomAdminController,
    roomAdminDelete,
    roomAdminUpdate
} from "../../controllers/roomController.js";

router.get("/room", roomFinder);
router.post("/room/controll", roomAdminController);
router.put("/room/delete", roomAdminDelete);
router.post("/room/update",roomAdminUpdate)

export default router;
