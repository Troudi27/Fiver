import express from "express";
 import {DeleteUser} from "./../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken , DeleteUser)

export default router;