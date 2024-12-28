const Task = require("../models/Task");

const findTaskById = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

module.exports = findTaskById;
