import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';

export async function register(req,res) {
    const {username,email,password} = req.body;

    const isUserAlreadyExsist = await userModel.findOne({
        $or: [{email}, {username}]
    })

    if(isUserAlreadyExsist){
        return res.status(400).json({
            message:"user with this email or username already exsists",
            success: false,
            err:"user already exsist"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    
}