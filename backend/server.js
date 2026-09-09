import "dotenv/config";
import app from "./src/app.js";
import connectDatabase from "./src/config/database.js";
import http from "http"
import { initSocket } from "./src/sockets/server.socket.js";

const port = Number(process.env.PORT) || 5000;

const startServer = async () => {
	const httpServer=http.createServer(app)
	initSocket(httpServer);
	
	try {
		await connectDatabase();

		httpServer.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	} catch (error) {
		console.error("Unable to start server:", error.message);
		process.exit(1);
	}
};

startServer();
