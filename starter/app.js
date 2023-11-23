const express = require('express');
const app = express();

const tasks = require("./routes/task")

app.use("/api/v1/tasks", tasks)

const port = 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}...`)
})

