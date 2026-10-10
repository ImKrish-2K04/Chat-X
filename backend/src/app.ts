import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { logger } from "./middlewares/logger.middleware.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { appRouter } from "./routes/index.routes.js";

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

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
