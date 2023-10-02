import Category from "../../models/Category.js";

// REQUEST-TYPE POST
// REQUEST-URL /api/v1/cakes/category
// DES request to add a new category (Admin only)
const addCategory = async (req, res) => {
  const { category } = req.body;
  const { admin } = req;

  if (!category) return res.status(400).json({ message: "No category found" });

  try {
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
  } catch (error) {
    return res.json(error);
  }
};

export default addCategory;
