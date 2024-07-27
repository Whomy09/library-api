import express from "express";
import { validate } from "@/middlewares/validate";
import { userSchema } from "@/schemas/userSchema";

import { create, getById, getAll } from "@/controllers/user.controllers";

const router = express.Router();

router.post("/", validate(userSchema), create);
router.get("/:id", getById);
router.get("/", getAll);

export default router;
