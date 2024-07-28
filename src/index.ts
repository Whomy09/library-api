import "module-alias/register";

import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import express, { Response } from "express";

import userRouter from "@/routes/user.routes";
import bookRouter from "@/routes/book.routes";

dotenv.config({
  path: ".env.dev",
});

connectDB();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/book", bookRouter);

app.get("/", (_, res: Response) =>
  res.status(200).send("Welcome to library API... :)")
);
app.listen(port, () => console.log(`The server is running on port ${port}`));
