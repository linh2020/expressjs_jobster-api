require("dotenv").config();

const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");

// Middleware
const authenticateUser = require("./middleware/authentication");

// Routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

const express = require("express");
const app = express();

// parsing
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Jobster API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

// Error Handling Middleware

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Express server is listening on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
