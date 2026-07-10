import { Router } from "express";
import {
  getConversationsForSidebar,
  getMessages,
  getUserForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectedRoutes } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = Router();

router.use(protectedRoutes);

router.get("/users", getUserForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id", getMessages);
router.get("/send/:id", upload.single("media"), sendMessage);
// todo: show this in the frontend

export default router;
