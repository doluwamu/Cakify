// const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose)

import { Schema, model } from "mongoose";
// import sequence from "mongoose-sequence";
import mongooseModelConstants from "../utils/mongooseConstants.js";

const { CAKE, USER, REVIEW, CATEGORY } = mongooseModelConstants;

// const AutoIncrement = sequence(mongoose);

const cakeSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: USER,
    },
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: REVIEW,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: CATEGORY,
    },
  },
  {
    timestamps: true,
  }
);

// noteSchema.plugin(AutoIncrement, {
//   inc_field: "ticket",
//   id: "ticketNums",
//   start_seq: 500,
// });

const Cake = model(CAKE, cakeSchema);

export default Cake;
