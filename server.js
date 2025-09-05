const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api/updateScore", require("./routes/updateScore"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
