import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  task_name: String,
  description: { type: String, default: "" },
  start_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now() + 5 * 24 * 60 * 60 * 1000 },
  category: String,
  complete: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", taskSchema);
