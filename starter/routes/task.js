const express = require("express");
const { getAllTasks } = require("../controllers/task");
const router = express.Router();

router.route("/").get(getAllTasks);

module.exports = router;
