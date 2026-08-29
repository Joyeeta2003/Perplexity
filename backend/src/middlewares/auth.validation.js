import { body, validationResult } from "express-validator";

export function Validate(req, res, next) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	next();
}

export const registerValidation = [
	body("username")
		.trim()
		.isLength({ min: 3, max: 30 })
		.withMessage("Username must be between 3 and 30 characters"),
	body("email")
		.trim()
		.isEmail()
		.withMessage("Please provide a valid email")
		.normalizeEmail(),
	body("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters"),

        Validate
];


