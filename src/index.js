const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { swaggerUi, swaggerSpec } = require("./docs/swagger");

dotenv.config();

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1);
  }
};

startServer();
