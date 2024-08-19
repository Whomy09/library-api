import { User } from "@/models/user.model";
import { Request, Response } from "express";
import { IUser } from "@/schemas/userSchema";
import mongoose from "mongoose";

export const create = async (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    await new User().create(req.body);

    res.status(200).json({
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

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    const user = await new User().getById(id);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await new User().getAll();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const update = async (
  req: Request<{ id: string }, {}, Partial<IUser>>,
  res: Response
) => {
  try {
    const id = req.params.id;
    const user = req.body;

    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    await new User().update(id, user);

    res.status(200).json({ message: "User successfully updated" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    await new User().delete(id);
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};
