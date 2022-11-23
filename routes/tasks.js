import express from "express";
import {
  getTasks,
  postTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const router = express.Router();

// HTTP Requests
router.get("/", getTasks);
router.post("/", postTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;
