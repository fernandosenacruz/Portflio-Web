import { Router } from "express";
import { commentController } from "./app/controller/CommentController";

const router: Router = Router()

router.get("/comments", commentController.getComment);
router.post("/comment", commentController.createComment);
router.put("/comment/:id", commentController.updateComment);
router.delete("/comment/:id", commentController.deleteComment);

export { router };
