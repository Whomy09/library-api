import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
};
