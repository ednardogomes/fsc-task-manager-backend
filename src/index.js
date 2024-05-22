const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const TaskRouter = require("./routes/task.routes.js");

const connectToDatabase = require("./database/mongoose.database.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/tasks", TaskRouter);

app.listen(8000, () => console.log("Listening on port 8000!"));
