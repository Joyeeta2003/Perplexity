import { generateRespose } from "../services/ai.services.js";

export async function sendMessage(req,res) {
    const {message} = req.body

    const result = await generateRespose(message);

    res.json({
        aiMessage:result
    })
}