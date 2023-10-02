import Category from "../../../models/Category.js";
import asyncHandler from "express-async-handler";

// REQUEST-TYPE PUT
// REQUEST-URL /api/v1/cakes/category/:id
// DES request edit cake category based on name provided (Admin only)
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { category } = req.body;

  const foundCategory = await Category.findById(id);

  if (!foundCategory)
    return res.status(400).json({ message: "Category does not exist" });

  if (!category)
    return res.status(400).json({ message: "Enter valid category" });

  foundCategory.category = category;

  if (!savedCategory)
    return res.status(400).json({ message: "Error updating category" });

  return res.json(foundCategory);
});

export default updateCategory;
