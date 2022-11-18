import express from "express";
import { getTasks, postTask, updateTask } from "../controllers/tasks.js";

const router = express.Router();

// HTTP Requests
router.get("/", getTasks);
router.post("/", postTask);
// add delete
router.put("/", updateTask);

export default router;
