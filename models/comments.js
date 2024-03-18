import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentsSchema = new Schema({
  comment: {
    type: String,
    required: true
  }
});

const Comments = mongoose.model("Comments", commentsSchema);

export default Comments