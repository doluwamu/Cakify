import Cake from "../../../models/Cake.js";
import Category from "../../../models/Category.js";
import asyncHandler from "express-async-handler";

// REQUEST-TYPE POST
// REQUEST-URL /api/v1/cakes
// DES request to add a new cake
const addCake = asyncHandler(async (req, res) => {
  const { name, description, price, category, size } = req.body;
  const validSizes = ["Small", "Mid", "Max"];
  const { user } = req;
  //   const { categoryId } = req.query;

  const checkSizeIsValid = validSizes.filter(
    (s, i) => s.toLowerCase() === size.toLowerCase()
  );

  if (!name || !description || !price || !category)
    return res.status(400).json({ message: "All fields are required" });

  if (!checkSizeIsValid || checkSizeIsValid.length < 1)
    return res.status(400).json({ message: "Choose a valid size" });

  //   if (!categoryId)
  //     return res.status(400).json({ message: "Select a category" });

  const foundCategory = await Category.findOne({ category });

  if (!foundCategory)
    return res.status(400).json({ message: "Choose a valid category" });

  const newCake = {
    owner: user,
    name,
    description,
    price,
    category: foundCategory,
    size,
  };

  const createdCake = await Cake.create(newCake);
  return res.json({ message: "New cake created", cake: createdCake });
});

export default addCake;
