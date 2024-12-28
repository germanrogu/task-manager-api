const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

module.exports = app;
