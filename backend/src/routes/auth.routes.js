import { Router } from "express";
import { register, verifyEmail } from "../controllers/auth.controller.js";
import {
	registerValidation,
} from "../middlewares/auth.validation.js";

const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body {username, email, password}
 */

authRouter.post("/register", registerValidation, register);

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @body {token}
 */
authRouter.get('/verify-email',verifyEmail)

export default authRouter;