import express from "express";
import { validate } from "@/middlewares/validate";
import { userSchema, userUpdateSchema } from "@/schemas/userSchema";

import {
  create,
  getById,
  getAll,
  update,
  remove,
} from "@/controllers/user.controllers";

const router = express.Router();

router
  .get("/", getAll)
  .get("/:id", getById)
  .delete("/:id", remove)
  .post("/", validate(userSchema), create)
  .patch("/:id", validate(userUpdateSchema), update);

export default router;
