import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker v2 (by arshizahid) 🎉" }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
