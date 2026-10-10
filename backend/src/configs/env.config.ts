import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const EnvSchema = z.object({
  PORT: z.coerce.number().int().positive(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const config = EnvSchema.safeParse(process.env);
if (!config.success) {
  console.error(`Invalid env vars:\n${z.prettifyError(config.error)}`);
  process.exit(1);
}

export const env = config.data;
