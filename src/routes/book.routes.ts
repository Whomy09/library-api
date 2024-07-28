import express from "express";
import { validate } from "@/middlewares/validate";
import { bookCreateSchema } from "@/schemas/bookSchema";

import { create } from "@/controllers/book.controllers";

const router = express.Router();

router.post("/", validate(bookCreateSchema), create);

export default router;
