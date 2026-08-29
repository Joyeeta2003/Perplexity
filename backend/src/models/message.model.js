import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		chat: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Chat",
			required: [true, "Message chat is required"],
		},
		content: {
			type: String,
			required: [true, "Message content is required"],
			trim: true,
		},
		role: {
			type: String,
			enum: {
				values: ["user", "AI"],
				message: "Role must be either user or AI",
			},
			required: [true, "Message role is required"],
		},
	},
	{ timestamps: true },
);

messageSchema.index({ chat: 1, createdAt: 1 });

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
