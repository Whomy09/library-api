import express from "express";
import { validate } from "@/middlewares/validate";
import { bookCreateSchema, bookUpdateSchema } from "@/schemas/bookSchema";

import {
  create,
  getById,
  getAll,
  update,
  remove,
} from "@/controllers/book.controllers";

const router = express.Router();

router
  .get("/", getAll)
  .get("/:id", getById)
  .delete("/:id", remove)
  .post("/", validate(bookCreateSchema), create)
  .patch("/:id", validate(bookUpdateSchema), update);

export default router;
