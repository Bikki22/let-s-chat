import { Router } from "express";
import { protectedRoutes } from "../middlewares/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js";

const router = Router();

router.get("/check", protectedRoutes, checkAuth);

export default router;
