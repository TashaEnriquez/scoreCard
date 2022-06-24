const mongoose = require("mongoose");

const myScoreCardSchema = new mongoose.Schema({
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

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ["Admin", "User"],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
    unique: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  scoreCards: [{ type: myScoreCardSchema }],
});

module.exports = mongoose.model("User", userSchema);
