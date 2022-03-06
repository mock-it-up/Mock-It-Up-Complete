const ejs = require('ejs');
const { StatusCodes } = require("http-status-codes");
const Interview = require("../models/Interviewee")

const getAllSchedule = async(req, res) => {
    try {
        const jobs = await Interview.find({}).sort("createdAt");
        res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
    } catch (err) {
        console.log(err);
    }

}

module.exports = getAllSchedule;