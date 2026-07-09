import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "./webhooks/clerk.webhook.js";

const app = express();

const PORT = process.env.PORT ?? 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhook,
);

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});
