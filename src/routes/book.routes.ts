import express from "express";
import { validate } from "@/middlewares/validate";
import { bookCreateSchema, bookUpdateSchema } from "@/schemas/bookSchema";

import {
  create,
  getById,
  getAll,
  update,
  remove,
  getByUser
} from "@/controllers/book.controllers";

const router = express.Router();

router
  .get("/", getAll)
  .get("/:id", getById)
  .get("/by-user/:userId", getByUser)
  .delete("/:id", remove)
  .post("/", validate(bookCreateSchema), create)
  .patch("/:id", validate(bookUpdateSchema), update);

export default router;
