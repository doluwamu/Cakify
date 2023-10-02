import Category from "../../../models/Category.js";
import asyncHandler from "express-async-handler";

// REQUEST-TYPE GET
// REQUEST-URL /api/v1/cakes/category
// DES request to all categories of cakes (Admin only)
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).lean();

  if (!categories)
    return res.status(400).json({ message: "Error fetching categories" });

  return res.json(categories);
});

export default getCategories;
