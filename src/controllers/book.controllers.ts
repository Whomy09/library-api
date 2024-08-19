import mongoose from "mongoose";
import { Book } from "@/models/book.model";
import { Request, Response } from "express";
import { IBook } from "@/schemas/bookSchema";

export const create = async (req: Request<{}, {}, IBook>, res: Response) => {
  try {
    const book = req.body;
    await new Book().create(book);
    res.status(200).json({
      message: "Successfully created book",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const getById = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    const book = await new Book().getById(id);
    res.status(200).json(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ error: error });
    }
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const books = await new Book().getAll();
    res.status(200).json(books);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const update = async (
  req: Request<{ id: string }, {}, Partial<IBook>>,
  res: Response
) => {
  try {
    const book = req.body;
    const id = req.params.id;

    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    await new Book().update(id, book);
    res.status(200).json({ message: "Book successfully updated" });
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

    await new Book().delete(id);
    res.status(200).json({ message: "Book successfully deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};

export const getByUser = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.params;

    const books = await new Book().getByUser(userId);

    res.status(200).json(books);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};
