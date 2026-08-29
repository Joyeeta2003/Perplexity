import mongoose from "mongoose";

const connectDatabase = async () => {
  const databaseUrl = process.env.MONGODB_URI;

  if (!databaseUrl) {
    throw new Error("MONGODB_URI is not set in the environment");
  }

  await mongoose.connect(databaseUrl);
  console.log("Database connected");
};

export default connectDatabase;
