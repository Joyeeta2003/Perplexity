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

    const emailVerificationToken = jwt.sign({
        email: user.email,
    }, process.env.JWT_SECRET)

    await sendEmail({
        to: email,
        subject: "welcome to perplexity!",
        html: `
        <p>Hi ${username}</p> 
        <p>thank you for registering at <strong> perplexity </strong>.
        we're excited to have you on board!. </p>
        <p> Please verify your email address by clicking the link below: </p>
        <a href = "http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
        <p>If you did not create an account, please ignore this email.</p>
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

export async function verifyEmail(req, res) {
    const {token} = req.query;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user =  await userModel.findOne({email: decoded.email});

    if(!user){
        return res.status(400).json({
            message:"Invalid token",
            success:false,
            err:"User not found"
        })
    }

    user.verified = true;

    await user.save();

    const html = `
    <h1>Email Verified Sucessfully!</h1>
    <p>Your email has been verified. You can now log in to your account.</p>
    <a href="http://localhost:3000/login">Go to Login</a>
    `

    res.send(html);
}

export async function login(req, res) {
    
}