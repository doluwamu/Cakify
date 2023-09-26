import express from "express";
import getCakes from "../controllers/cakes/getCakes.js";

const router = express.Router();

router.route("").get(getCakes);

export default router;
