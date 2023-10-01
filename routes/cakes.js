import express from "express";
import addCategory from "../controllers/cakes/addCategory.js";
import getCakes from "../controllers/cakes/getCakes.js";
import getCategories from "../controllers/cakes/getCategories.js";
import updateCategory from "../controllers/cakes/updateCategory.js";

const router = express.Router();

router.route("").get(getCakes);

// Categories
router.route("/category").get(getCategories).post(addCategory);
router.route("/category/:id").put(updateCategory);

export default router;
