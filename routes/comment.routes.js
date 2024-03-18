import { Router } from "express";
import { getAllComments, postComment } from "../controllers/commentsController.js";

const router = Router();

router.get("/comments", getAllComments)
router.post("/comments", postComment)

export default router