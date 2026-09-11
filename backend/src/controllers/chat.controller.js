import { generateRespose, generateChatTitle } from "../services/ai.services.js";
import chatModel from '../models/chat.model.js'
import messageModel from '../models/message.model.js'

export async function sendMessage(req, res) {
    const { message, chat: chatId } = req.body;

    let title = null, chat = null;

    if (!chatId) {
        title = await generateChatTitle(message);
        chat = await chatModel.create({
            user: req.user.id,
            title
        })
    }

    const userMessage = await messageModel.create({
        chat: chat._id,
        content: result,
        role: "user"
    })

    const result = await generateRespose(message);

    const aiMessage = await messageModel.create({
        chat: chat._id,
        content: result,
        role: "AI"
    })

    res.status(201).json({
        title,
        chat,
        aiMessage
    })
}

export async function getChats(req,res) {
    const user = req.user

    const chats = await chatModel.find({ user:user.id })

    res.status(200).json({
        message:"Chat retrived successfully",
        chats
    })
}

export async function getMessage(req,res) {
    const {chatId} = req.params;

    const chat = await chatModel.findOne({
        _id: chatId,
        user:req.user.id
    })
    
    if(!chat){
        return res.status(404).json({
            message:"chat not found"
        })
    }

    const messages = await messageModel.find({
        chat:chatId
    })
    res.status(200).json({
        message:"Message retrieved sucessfully",
        messages
    })
}

export async function deleteChat(req,res) {
    const {chatId} = req.params;

    const chat = await chatModel.findOneAndDelete({
        _id:chatId,
        user:req.user.id
    })

    await messageModel.deleteMany({
        chat:chatId
    })

    if(!chat){
        return res.status(404).json({
            message:"Chat not found"
        })
    }

    res.status(200).json({
        message:"Chat deleted sucessfully"
    })
}