import express from "express";
import dotenv from "dotenv";
dotenv.config(); 

console.log("MONGODB_URI:", process.env.MONGODB_URI); // check if it prints correctly
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("IMAGEKIT_PUBLIC_KEY:", process.env.IMAGEKIT_PUBLIC_KEY);



import cors from "cors";
import connectDB from "./Configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings",bookingRouter)

const PORT = process.env.PORT || 3000;


connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
});
