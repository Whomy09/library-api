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
