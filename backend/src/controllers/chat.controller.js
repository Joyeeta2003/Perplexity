import { generateRespose, generateChatTitle } from "../services/ai.services.js";
import chatModel from '../models/chat.model.js'
import messageModel from '../models/message.model.js'

export async function sendMessage(req,res) {
    const {message} = req.body

    const title = await generateChatTitle(message);
    const result = await generateRespose(message);

    const chat = await chatModel.create({
        user:req.user.id,
        title
    })

    const aiMessage = await messageModel.create({
        chat:chat._id,
        content:result,
        role:"AI"
    })

    res.status(201).json({
        title,
        chat,
        aiMessage
    })
}