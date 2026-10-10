import { Router } from "express";
import { logOut, signIn, signUp } from "../controllers/auth/auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/sign-in", signIn);
authRoutes.get("/logout", logOut);
