// routes/orderRoutes.ts
import express from "express";
import { GetOrder } from "../Controller/orderController";

const router = express.Router();

router.get("/", GetOrder);

export default router;
