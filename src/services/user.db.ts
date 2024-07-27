import { Document, Schema } from "mongoose";
import { IUser } from "@/schemas/userSchema";

export interface MongoUser extends Document, IUser {}

export const MongoUserChema: Schema<MongoUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
