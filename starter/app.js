const express = require('express');
const app = express();

const tasks = require("./routes/task")

app.use("/api/v1/tasks", tasks)
app.use("/api/v1/tasks/:id", tasks)

const port = 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}...`)
})

