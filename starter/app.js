const express = require("express");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/task");

app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
