const express = require("express");
const { check } = require("express-validator");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post(
  "/",
  [check("title", "Title is required").not().isEmpty()],
  createTask
);

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.put(
  "/:id",
  [
    check("title", "Title must not be empty").optional().not().isEmpty(),
    check("completed", "Completed must be a boolean value")
      .optional()
      .isBoolean(),
  ],
  updateTask
);

router.delete("/:id", deleteTask);

module.exports = router;
