import mongoose from "mongoose";
import { IUser } from "@/schemas/userSchema";
import { MongoUser, MongoUserChema } from "@/services/user.db";

export class User {
  db: mongoose.Model<MongoUser>;

  constructor() {
    this.db = mongoose.model<MongoUser>("User", MongoUserChema);
  }

  async create(user: IUser) {
    await new this.db(user).save();
    return user;
  }
}
