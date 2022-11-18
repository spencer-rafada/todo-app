import { Task } from "../models/TaskSchema.js";

export const getTasks = async (_, res) => {
  // const search_query = req.body;
  // not implementing search yet so this is good.
  const search_result = await Task.find({});
  res.json(search_result);
};

export const postTasks = (req, res) => {
  // console.log(req.body);
  const received_task = req.body;
  const new_task = new Task({
    task_name: received_task.task_name,
    description: received_task.description,
    category: received_task.category,
  });

  new_task.save((error) => {
    if (error) {
      res.json(`Task: ${received_task.task_name} failed to save`);
      return handleError(error);
    } else {
      res.json(`Task: ${received_task.task_name} has been saved to database.`);
    }
  });
};
