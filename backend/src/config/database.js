const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI env variable is not set");
    return;
  }
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log("MongoDB Connected: " + conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection FAILED: " + error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
