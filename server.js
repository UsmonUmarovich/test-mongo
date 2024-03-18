import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/comment.routes.js";

mongoose.connect(MONGODB_URL);
const db = mongoose.connection;

db.on("error", (err) => console.error);

db.once("open" , () => console.log("Database connection open"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Usmon:17032009aA@usmon.dqfejre.mongodb.net/?retryWrites=true&w=majority&appName=Usmon"
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
