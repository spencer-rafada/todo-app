import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Import Routes here
import tasksRoutes from "./routes/tasks.js";

const app = express();
app.use(cors());
dotenv.config();

// Middleware to match the requests Content Type Header and the type
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/tasks", tasksRoutes);

mongoose
  // Establish connection with Database
  .connect(process.env.MONGO_URL)
  // Once connected to the database, run the server on port
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on ${process.env.PORT}`)
    );
  })
  // Display Errors
  .catch((error) => {
    console.log(error.message);
  });
