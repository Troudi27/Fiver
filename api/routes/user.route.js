import express from "express";
 import {DeleteUser, getUser} from "./../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, DeleteUser);
router.get("/:id", verifyToken, getUser);

export default router;