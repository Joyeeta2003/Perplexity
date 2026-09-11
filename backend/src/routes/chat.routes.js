import { Router } from "express";
import { sendMessage, getChats, getMessage, deleteChat } from "../controllers/chat.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/message", authUser , sendMessage)

chatRouter.get("/", authUser , getChats)

chatRouter.post("/:chatId/messages", authUser , getMessage)

chatRouter.post("/delete/:chatId", authUser , deleteChat)

export default chatRouter;