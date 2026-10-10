import { Router } from "express";

export const messageRouter = Router();

messageRouter.post("/send", async (_req, res) => {
  return res.status(200).json({
    message: "Message sent successfully!",
  });
});
