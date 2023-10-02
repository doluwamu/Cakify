import { Router } from "express";
import login from "../../controllers/v1/auth/login.js";
import logout from "../../controllers/v1/auth/logout.js";
import refresh from "../../controllers/v1/auth/refresh.js";
import signup from "../../controllers/v1/auth/signup.js";
// import verifyJWT from "../middleware/verifyJWT.js";

const router = Router();

router.post("/", login);
router.post("/signup", signup);
router.get("/refresh", refresh);
router.post("/logout", logout);

export default router;
