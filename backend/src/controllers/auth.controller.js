import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../services/mail.service.js";

export async function register(req, res) {
    const { username, email, password } = req.body;

    const isUserAlreadyExsist = await userModel.findOne({
        $or: [{ email }, { username }]
    })

    if (isUserAlreadyExsist) {
        return res.status(400).json({
            message: "user with this email or username already exsists",
            success: false,
            err: "user already exsist"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    await sendEmail({
        to: email,
        subject: "welcome to perplexity!",
        html: `
        <p>Hi ${username}</p> 
        <p>thank you for registering at <strong> perplexity </strong>.
        we're excited to have you on board!. </p>
        <p>Best regards, <br> The Perplexity Team</p>
        `
    })

    res.status(201).json({
        message:"user register sucessfully",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}