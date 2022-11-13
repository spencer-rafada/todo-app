import express from "express";
import { getTasks, postTasks } from "../controllers/tasks.js";

const router = express.Router();

// HTTP Requests
router.get("/", getTasks);
router.post("/", postTasks);
// add delete
// add put

export default router;
