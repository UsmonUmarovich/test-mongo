const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
  comment: {
    type: String,
    required: true
  }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments