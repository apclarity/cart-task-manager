import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Judul tidak boleh kosong"),
});