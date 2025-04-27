import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Email not valid"),
  password: z.string().min(6, "Password must be 6 characters"),
});
