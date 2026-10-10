import type { Request, Response, NextFunction } from "express";

export const signUp = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return res.status(200).json({
    message: "User registered successfully!",
  });
};

export const signIn = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return res.status(200).json({
    message: "User logged-in successfully!",
  });
};

export const logOut = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return res.status(200).json({
    message: "Session logged out!",
  });
};
