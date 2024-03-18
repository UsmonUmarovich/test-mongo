import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Comments from "./models/comments.js";

mongoose.connect(
  "mongodb+srv://Usmon:17032009aA@usmon.dqfejre.mongodb.net/?retryWrites=true&w=majority&appName=Usmon"
);
const db = mongoose.connection;

db.on("error", (err) => console.error);

db.once("open", () => console.log("Database connection open"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/comments", async (req, res) => {
  await Comments.find()
    .then((r) => res.json(r))
    .catch((err) => res.status(500).json({ message: "Error: " + err }));
});

app.post("/comments", async (req, res) => {
  const comment = new Comments({
    comment: req.body.comment,
  });
  await comment
    .save()
    .then(() =>
      res.status(200).json({ message: "Comment posted successfully" })
    )
    .catch((err) => res.status(500).json({ message: "Error: " + err }));
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
