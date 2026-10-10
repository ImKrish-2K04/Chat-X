import type { Request, Response, NextFunction } from "express";
import { AppError } from "./../utils/appError.js";

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  if (err.isOperational) {
    return res.status(statusCode).json({
      status: status,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};
