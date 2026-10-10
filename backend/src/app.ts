import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { logger } from "./middlewares/logger.middleware.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { appRouter } from "./routes/index.routes.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(logger());

  app.use("/api/v1", appRouter);
  app.get("/health", (_: Request, res: Response) => {
    return res.status(200).json({
      message: "Server is healthy as it is running smoothly!",
    });
  });

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const frontendDist = path.resolve(__dirname, "../../frontend/dist");

  if (process.env.NODE_ENV === "production" && fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist));
    app.get("/{*splat}", (_req: Request, res: Response) => {
      res.sendFile(path.join(frontendDist, "index.html"));
    });
  }

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
