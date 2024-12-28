### Task Manager Backend

This is the backend of the **Task Manager** project, developed with Node.js, Express, and MongoDB. It provides a RESTful API for managing tasks.

---

## Deployed Application

The backend is deployed and accessible at the following URL:

[Deployed Backend URL](https://task-manager-api-469f.onrender.com/api/tasks)
[Deployed Swagger Backend URL](https://task-manager-api-469f.onrender.com/docs)

---

## Installation and Running Locally

Follow these steps to configure and run the backend locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/germanrogu/task-manager-api.git
cd task-manager-api
```

### 2. **Install the Dependencies**

Make sure you have Node.js and npm installed. Then, run:

```bash
npm install
```

### 3. **Set Environment Variables**

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_URI=mongodb+srv://test-user:admin12345@task-db.o5kpe.mongodb.net/?retryWrites=true&w=majority&appName=task-db
PORT=5001
```

- **MONGO_URI**: The connection string for your MongoDB database.
- If you're using a local MongoDB installation, use `mongodb://localhost:27017/taskmanager`.
- If you're using MongoDB Atlas, use the URI provided by your cluster.
- **PORT**: The port on which the server will run (default: 5001).

### 4. **Start the MongoDB Server**

If you're using a local MongoDB installation, make sure the server is running. You can start it with the following command:

```bash
mongod
```

> **Note**: If you are using MongoDB Atlas, this step is not necessary.

### 5. **Start the Backend Server**

Run the following command to start the server:

```bash
npm run start
```

The backend will be available at `http://localhost:5001`.

---

## Configuration Details

- **MONGO_URI**: The connection string for your MongoDB database.
- **PORT**: The port on which the server will run (default: 5001).

---

## API Endpoints

### 1. **Create a Task**

- **Endpoint**: `POST /api/tasks`
- **Description**: Create a new task.
- **Request Body**:

```json
{
  "title": "Task Title",
  "description": "Optional Task Description"
}
```

- **Response**:

```json
{
  "id": "unique_task_id",
  "title": "Task Title",
  "description": "Optional Task Description",
  "completed": false,
  "createdAt": "2023-10-01T00:00:00.000Z"
}
```

---

### 2. **Get All Tasks**

- **Endpoint**: `GET /api/tasks`
- **Description**: Returns a list of all tasks. Supports filtering by status.
- **Query Parameters**:
- `completed` (optional): `true` or `false` to filter tasks by their completion status.
- **Response**:

```json
[
  {
    "id": "unique_task_id",
    "title": "Task Title",
    "description": "Optional Task Description",
    "completed": false,
    "createdAt": "2023-10-01T00:00:00.000Z"
  }
]
```

---

### 3. **Get a Task by ID**

- **Endpoint**: `GET /api/tasks/:id`
- **Description**: Returns the details of a specific task by its ID.
- **Response**:

```json
{
  "id": "unique_task_id",
  "title": "Task Title",
  "description": "Optional Task Description",
  "completed": false,
  "createdAt": "2023-10-01T00:00:00.000Z"
}
```

---

### 4. **Update a Task**

- **Endpoint**: `PUT /api/tasks/:id`
- **Description**: Updates the fields of a specific task.
- **Request Body**:

```json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}
```

- **Response**:

```json
{
  "id": "unique_task_id",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true,
  "createdAt": "2023-10-01T00:00:00.000Z"
}
```

---

### 5. **Delete a Task**

- **Endpoint**: `DELETE /api/tasks/:id`
- **Description**: Delete a specific task by its ID.
- **Response**:

```json
{
  "message": "Task deleted successfully"
}
```

---

## Additional Notes

- The backend uses **MongoDB** as the database and **Mongoose** for object modeling.
- Validations are implemented with **express-validator**.
- API documentation is available at the `/docs` endpoint.
- Error handling is structured with clear HTTP codes (400, 404, 500).

---

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express**: Framework to build the RESTful API.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **express-validator**: Data validation.
- **Swagger**: API documentation.

```

```
