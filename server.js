const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

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
