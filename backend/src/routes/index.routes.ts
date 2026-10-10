import { Router } from "express";
import { authRoutes } from "./auth.routes.js";
import { messageRouter } from "./message.routes.js";

export const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/message", messageRouter);
