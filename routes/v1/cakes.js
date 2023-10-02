import express from "express";
import addCake from "../../controllers/v1/cakes/addCake.js";
import addCategory from "../../controllers/v1/cakes/addCategory.js";
import getCakes from "../../controllers/v1/cakes/getCakes.js";
import getCategories from "../../controllers/v1/cakes/getCategories.js";
import updateCategory from "../../controllers/v1/cakes/updateCategory.js";
import { verifyUser, isAdmin } from "../../middleware/verifyUser.js";

const router = express.Router();

router.route("").get(verifyUser, getCakes).post(verifyUser, isAdmin, addCake);

// Categories
router
  .route("/category")
  .get(verifyUser, getCategories)
  .post(verifyUser, isAdmin, addCategory);
router.route("/category/:id").put(verifyUser, isAdmin, updateCategory);

export default router;
