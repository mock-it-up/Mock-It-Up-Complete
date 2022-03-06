const express = require('express');
const router = express.Router();

const { display, schedule } = require("../controllers/interview");

router.route("/").get(display).post(schedule);


module.exports = router;