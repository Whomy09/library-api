import { User } from "@/models/user.model";
import { Request, Response } from "express";
import { IUser } from "@/schemas/userSchema";

export const create = async (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    const user = await new User().create(req.body);

    res.status(200).json({
      user,
      message: "User successfully created",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};
