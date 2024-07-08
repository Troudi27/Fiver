import express from "express";
import {deleteUser} from "../controllers/conversation.controller";

const router = express.Router();

router.get("/test", deleteUser)

export default router;