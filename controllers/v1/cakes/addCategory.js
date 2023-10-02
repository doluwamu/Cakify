import Category from "../../../models/Category.js";
import asyncHandler from "express-async-handler";

// REQUEST-TYPE POST
// REQUEST-URL /api/v1/cakes/category
// DES request to add a new category (Admin only)
const addCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;

  if (!category) return res.status(400).json({ message: "No category found" });

  const categoryExists = await Category.findOne({ category }).lean();

  if (categoryExists)
    return res.status(400).json({ message: "Category exists" });

  const newCategory = {
    category,
  };

  const createdCategory = await Category.create(newCategory);

  if (!createdCategory)
    return res.status(400).json({ message: "Error creating category" });

  return res.json({
    message: `category ${category.toUpperCase()} created successfully`,
  });
});

export default addCategory;
