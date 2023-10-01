// const mongoose = require('mongoose')
import { Schema, model } from "mongoose";
import mongooseModelConstants from "../utils/mongooseConstants.js";

const { USER } = mongooseModelConstants;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "customer",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const User = model(USER, userSchema);

export default User;
