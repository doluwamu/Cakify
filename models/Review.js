import { Schema, model } from "mongoose";
import mongooseModelConstants from "../utils/mongooseConstants.js";

const { REVIEW, USER, CAKE } = mongooseModelConstants;

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: USER,
    },
    cake: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: CAKE,
    },
  },
  {
    timestamps: true,
  }
);

const Review = model(REVIEW, reviewSchema);

export default Review;
