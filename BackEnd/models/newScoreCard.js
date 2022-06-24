const mongoose = require("mongoose");

const newScoreCardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  creatorName: { type: String },
  createdOn: { type: Date, default: new Date() },
  timer: {
    type: Number,
    min: 5,
    max: 90,
  },
});

module.exports = mongoose.model("scoreCard", newScoreCardSchema);
