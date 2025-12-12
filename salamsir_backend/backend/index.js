import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import updateRoutes from "./routes/updateRoutes.js";

dotenv.config(); // load env variables first!

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect database (after dotenv.config)
connectDB();

// base route
app.get("/", (req, res) => {
  res.send("Zainab ka Server is running on...");
});


// Connect routes

app.use("/api/auth", authRoutes);
app.use("/api/updates",updateRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

