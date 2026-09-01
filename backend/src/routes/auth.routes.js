import { Router } from "express";
import { register, verifyEmail,login } from "../controllers/auth.controller.js";
import {
	registerValidation,
	loginValidator
} from "../validators/auth.validation.js";

const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body {username, email, password}
 */

authRouter.post("/register", registerValidation, register);

/**
 * @route POST /api/auth/login
 * @desc login user and return JWT token
 * @access Public
 * @body {email,password}
 */
authRouter.post("/login", loginValidator, login)

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @body {token}
 */
authRouter.get('/verify-email',verifyEmail)

export default authRouter;