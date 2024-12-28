const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Task Manager API",
    version: "1.0.0",
    description: "API Task Manager (CRUD)",
  },
  servers: [
    {
      url: "http://localhost:5001",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/docs/swaggerDocs.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
