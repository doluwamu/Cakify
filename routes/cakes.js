import express from "express";
import addCategory from "../controllers/cakes/addCategory.js";
import getCakes from "../controllers/cakes/getCakes.js";

const router = express.Router();

router.route("").get(getCakes);

// Categories
router.route("/category").post(addCategory);

export default router;
