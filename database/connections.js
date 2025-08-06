const mongoose = require("mongoose");

const uri = process.env.DATABASE_CONNECTION;
console.log("uri", uri);

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/siddharth_task", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();
