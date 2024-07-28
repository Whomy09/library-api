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
}
