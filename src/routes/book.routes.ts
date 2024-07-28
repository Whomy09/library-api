import express from "express";
import { validate } from "@/middlewares/validate";
import { bookSchema } from "@/schemas/bookSchema";

import { create } from "@/controllers/book.controllers";

const router = express.Router();

router.post("/", validate(bookSchema), create);

export default router;
