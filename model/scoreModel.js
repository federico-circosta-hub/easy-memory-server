import { Schema, model } from "mongoose";

const scoreSchema = new Schema({
  username: {
    required: true,
    type: String,
  },
  score: {
    required: true,
    type: Number,
  },
});

export default model("score", scoreSchema);
