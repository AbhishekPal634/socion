import express from "express";
import { handleInstagramChat } from "../controllers/chatController.js";
import { handleTwitterChat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/instachat", handleInstagramChat);
router.post("/twitterchat", handleTwitterChat);

export default router;
