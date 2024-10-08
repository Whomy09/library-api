import mongoose from "mongoose";
import { IUser } from "@/schemas/userSchema";
import { MongoUser, MongoUserChema } from "@/services/user.db";

export class User {
  private db: mongoose.Model<MongoUser>;

  constructor() {
    this.db = mongoose.model<MongoUser>("User", MongoUserChema);
  }

  async create(user: IUser) {
    await new this.db(user).save();
  }

  async getById(id: string) {
    const user = await this.db.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
    };
  }

  async getAll() {
    const users = await this.db.find();

    return users.map((user) => {
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        lastName: user.lastName,
      };
    });
  }

  async update(id: string, user: Partial<IUser>) {
    await this.db.findByIdAndUpdate(id, user);
  }

  async delete(id: string) {
    await this.db.findByIdAndDelete(id);
  }
}
