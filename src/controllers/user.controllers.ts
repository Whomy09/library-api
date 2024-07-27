import { User } from "@/models/user.model";
import { Request, Response } from "express";
import { IUser } from "@/schemas/userSchema";

export const create = (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    const user = req.body;

    res.status(200).json({
      message: "User successfully created",
      user: new User().create(user),
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};
