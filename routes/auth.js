import { Router } from "express";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";
import refresh from "../controllers/auth/refresh.js";
import signup from "../controllers/auth/signup.js";
// import verifyJWT from "../middleware/verifyJWT.js";

const router = Router();

router.post("/", login);
router.post("/signup", signup);
router.get("/refresh", refresh);
router.post("/logout", logout);

export default router;
