const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
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

module.exports = mongoose.model('Example', exampleSchema)
