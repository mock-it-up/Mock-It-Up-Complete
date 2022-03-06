require("dotenv").config();
require("express-async-errors");

//Extra Security Pakages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

//routes
const route = require("./routes/path");
const adminRoute = require("./routes/admin");

//security pakages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit ip to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
//paths

app.get("/", (rew, res) => {
  res.send("Mock-It-Up API");
});
app.use("/api/v1/main", route);
app.use("/api/v1/admin", adminRoute);

//database
const connectDB = require("./db/connect");

//port access
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
