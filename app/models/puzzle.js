const mongoose = require('mongoose')

const puzzleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    difficulty: {
      type: Number,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Puzzle', puzzleSchema)
