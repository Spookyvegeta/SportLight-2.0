import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4 // Use IPv4
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed!!");
    console.error(error.message);
    console.log("\nTroubleshooting:");
    console.log("1. Check if your IP is whitelisted in MongoDB Atlas");
    console.log("2. Verify your connection string is correct");
    console.log("3. Try changing DNS settings to use Google DNS (8.8.8.8)");
    console.log("4. Check if your firewall/antivirus is blocking MongoDB connections\n");
    // Don't exit - let the server run for testing
    // process.exit(1);
  }
};

export default connectDB;
