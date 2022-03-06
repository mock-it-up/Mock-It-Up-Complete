const mongoose = require("mongoose");

const InterviewsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide Name"],
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Please Provide Email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide a Valid Email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please provide phone Number"],
      trim: true,
      minlength: 9,
    },
    drive: {
      type: String,
      required: [true, "Please provide Link for Resume"],
      trim: true,
      minlength: 3,
    },
    domain: {
      type: String,
      required: [true, "Please provide Domain"],
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Interview", InterviewsSchema);
