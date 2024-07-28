import express from "express";
import { validate } from "@/middlewares/validate";
import { userSchema, userUpdateSchema } from "@/schemas/userSchema";

import {
  create,
  getById,
  getAll,
  update,
} from "@/controllers/user.controllers";

const router = express.Router();

router
  .post("/", validate(userSchema), create)
  .get("/:id", getById)
  .get("/", getAll)
  .patch("/:id", validate(userUpdateSchema), update);

export default router;
