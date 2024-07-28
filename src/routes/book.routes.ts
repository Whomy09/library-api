import express from "express";

import { create } from "@/controllers/book.controllers";

const router = express.Router();

router.post("/", create);

export default router;
