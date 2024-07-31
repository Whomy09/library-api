import express from "express";
import { validate } from "@/middlewares/validate";
import { bookCreateSchema } from "@/schemas/bookSchema";

import { create, getById, getAll } from "@/controllers/book.controllers";

const router = express.Router();

router
  .post("/", validate(bookCreateSchema), create)
  .get("/:id", getById)
  .get("/", getAll);

export default router;
