import { Schema, model } from "mongoose";
import mongooseModelConstants from "../utils/mongooseConstants.js";

const { CATEGORY } = mongooseModelConstants;

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      default: "birthday",
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model(CATEGORY, categorySchema);

export default Category;
