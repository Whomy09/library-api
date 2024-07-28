import { Document, Schema } from "mongoose";
import { IBook } from "@/schemas/bookSchema";

export interface MongoBook extends Document, IBook {}

export const MongoBookSchema: Schema<MongoBook> = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  numberOfPage: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
