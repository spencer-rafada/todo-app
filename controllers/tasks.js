export const getTasks = (req, res) => {
  res.json("Hello! Change this to asynchronous function in the future.");
};

export const postTasks = (req, res) => {
  // console.log(req.body);
  res.json(`This is the message I received: ${req.body.message}`);
};
