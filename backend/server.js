import "dotenv/config";
import app from "./src/app.js";
import connectDatabase from "./src/config/database.js";
import { testAi } from "./src/services/ai.services.js";

const port = Number(process.env.PORT) || 5000;

testAi();

const startServer = async () => {
	try {
		await connectDatabase();

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	} catch (error) {
		console.error("Unable to start server:", error.message);
		process.exit(1);
	}
};

startServer();
