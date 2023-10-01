import Category from "../../models/Category.js";

// REQUEST-TYPE GET
// REQUEST-URL /api/v1/cakes/category
// DES request to all categories of cakes (Admin only)
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).lean();

    if (!categories)
      return res.status(400).json({ message: "Error fetching categories" });

    return res.json(categories);
  } catch (error) {
    return res.json(error);
  }
};

export default getCategories;
