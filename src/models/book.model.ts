import mongoose from "mongoose";
import { IBook } from "@/schemas/bookSchema";
import { MongoBook, MongoBookSchema } from "@/services/book.db";

export class Book {
  private db: mongoose.Model<MongoBook>;

  constructor() {
    this.db = mongoose.model<MongoBook>("Book", MongoBookSchema);
  }

  async create(book: IBook) {
    await new this.db(book).save();
  }

  async getById(id: string) {
    /**
     * Note: The lean function returns 
     * me a flat js object if metadata
     */
    const book = await this.db.findById(id).lean();

    if (!book) {
      throw new Error("Book not found");
    }
 
    const { _id, ..._book } = book

    return {
      id: _id,
      ..._book
    }
  }
}
