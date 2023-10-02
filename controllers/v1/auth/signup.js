import User from "../../../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

// @desc Signup
// @route POST /auth/signup
// @access Public
const signup = asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword, roles } = req.body;

  // Confirm data
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  // Check for duplicate username
  const duplicateUsername = await User.findOne({ username }).lean().exec();

  if (duplicateUsername) {
    return res.status(409).json({ message: "Username taken" });
  }

  const duplicateEmail = await User.findOne({ email }).lean().exec();

  if (duplicateEmail) {
    return res
      .status(409)
      .json({ message: "User with this email already exists" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

  const userObject = {
    username,
    email,
    password: hashedPwd,
  };

  // Create and store new user
  const user = await User.create(userObject);

  if (user) {
    //created
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

export default signup;
