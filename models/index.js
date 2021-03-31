const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const botSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  questionOneResponse: {
    type: String,
    required: false,
  },
  questionTwoResponse: {
    type: String,
    required: false,
  },
  questionThreeResponse: [
    {
      type: String,
    },
  ],
  questionFourResponse: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Bot", botSchema);
