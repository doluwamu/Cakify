import Category from "../../models/Category.js";

// REQUEST-TYPE PUT
// REQUEST-URL /api/v1/cakes/category/:id
// DES request edit cake category based on name provided (Admin only)
const updateCategory = async (req, res) => {
  const { id } = req.params;

  const { category } = req.body;

  try {
    const foundCategory = await Category.findById(id);

    if (!foundCategory)
      return res.status(400).json({ message: "Category does not exist" });

    if (!category)
      return res.status(400).json({ message: "Enter valid category" });

    foundCategory.category = category;

    try {
      const savedCategory = await foundCategory.save();

      if (!savedCategory)
        return res.status(400).json({ message: "Error updating category" });
    } catch (error) {
      return res.json(error);
    }

    return res.json(foundCategory);
  } catch (error) {
    return res.json(error);
  }
};

export default updateCategory;
