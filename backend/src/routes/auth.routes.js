import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
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

export default authRouter;