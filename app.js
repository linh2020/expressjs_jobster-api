require("dotenv").config();

const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(201).json({ msg: "Jobster API" });
});

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
