const mongoose = require("mongoose");

const scoreCardSchema = new mongoose.Schema({
  section: { type: String },
  subSection: [
    {
      name: { type: String },
      comments: { type: [String] },
      points: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
  ],
  generalPoints: { type: Number, max: 55 },
});

module.exports = mongoose.model("ScoreCard", scoreCardSchema);
