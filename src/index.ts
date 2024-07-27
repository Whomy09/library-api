import "module-alias/register";

import dotenv from "dotenv";
import express, { Response } from "express";

import userRouter from "@/routes/user.routes";

dotenv.config({
  path: ".env.dev",
});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

app.get("/", (_, res: Response) =>
  res.status(200).send("Welcome to library API... :)")
);
app.listen(port, () => console.log(`The server is running on port ${port}`));
