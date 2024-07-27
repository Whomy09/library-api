import express from "express";
import { validate } from "@/middlewares/validate";
import { userSchema } from "@/schemas/userSchema";

import { create, getById } from "@/controllers/user.controllers";

const router = express.Router();

router.post("/", validate(userSchema), create);
router.get("/:id", getById);

export default router;
