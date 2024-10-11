import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(4, { message: "Username must be at least 4 characters" }),
  password: z.string().min(4, { message: "Password must be at least 4 characters" }),
});

export function validateLogin(data: { username: string, password: string }) {
  return loginSchema.safeParse(data);
}