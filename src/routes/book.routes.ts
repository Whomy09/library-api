import express from "express";
import { validate } from "@/middlewares/validate";
import { bookCreateSchema, bookUpdateSchema } from "@/schemas/bookSchema";

import {
  create,
  getById,
  getAll,
  update,
} from "@/controllers/book.controllers";

const router = express.Router();

router
  .post("/", validate(bookCreateSchema), create)
  .get("/:id", getById)
  .get("/", getAll)
  .patch("/:id", validate(bookUpdateSchema), update);

export default router;
