const { StatusCodes } = require("http-status-codes");
const Interview = require("../models/Interviewee");

const display = async (req, res) => {
  res.send("Display Works");
};

const schedule = async (req, res) => {
  const interview = await Interview.create(req.body);
  res.status(StatusCodes.OK).json({ interview });
};

module.exports = {
  display,
  schedule,
};
