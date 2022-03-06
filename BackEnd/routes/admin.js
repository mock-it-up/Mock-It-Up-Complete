const express = require('express');
const router = express.Router();
const getAllSchedule = require("../controllers/admin")


router.route("/").get(getAllSchedule);
module.exports = router