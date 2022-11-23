import { Task } from "../models/TaskSchema.js";

export const getTasks = async (_, res) => {
  // const search_query = req.body;
  // not implementing search yet so this is good.
  const search_result = await Task.find({});
  res.json(search_result);
};

export const postTask = (req, res) => {
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

// This function should receive all of the information from the task
export const updateTask = async (req, res) => {
  const update_query = req.body;
  const _ = await Task.updateOne(
    { _id: update_query._id },
    {
      task_name: update_query.task_name,
      description: update_query.description,
      start_date: update_query.start_date,
      due_date: update_query.due_date,
      category: update_query.category,
      complete: update_query.complete,
    }
  ).then((error) => {
    if (error) {
      res.json(`Task: ${update_query.task_name} has been updated`);
    } else {
      res.json(`${update_query._id} Failed to update task.`);
    }
  });
};

export const deleteTask = async (req, res) => {
  const delete_query = req.body;
  const _ = await Task.deleteOne({ _id: delete_query._id }).then((response) => {
    if (response.deletedCount == 0) {
      res.json(`No matching file deleted.`);
    } else {
      res.json(`Deleted ${response.deletedCount} document(s).`);
    }
  });
};
