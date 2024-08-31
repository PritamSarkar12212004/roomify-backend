import express from "express";
const router = express.Router();

import {
  roomFinder,
  roomAdminController,
  roomAdminDelete,
  roomAdminUpdate,
  searchengineController,
  roompeoplesiteController,
} from "../../controllers/roomController.js";

router.get("/room", roomFinder);
router.post("/room/controll", roomAdminController);
router.put("/room/delete", roomAdminDelete);
router.post("/room/update", roomAdminUpdate);
router.post("/room/searchengine", searchengineController);
router.post("/room/peoplesite/search", roompeoplesiteController);

export default router;
