const mongoose = require("mongoose");

const UpdateScoreSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  score: {
    type: Number,
  },
});

module.exports = UpdateScore = mongoose.model("updateScore", UpdateScoreSchema);
