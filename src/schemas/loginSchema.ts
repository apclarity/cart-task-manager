import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email not valid"),
  password: z.string().min(6, "Password is wrong"),
});
