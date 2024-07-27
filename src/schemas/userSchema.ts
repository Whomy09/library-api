import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export type IUser = z.infer<typeof userSchema>;
