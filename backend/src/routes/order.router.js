import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  createOrder,
  getOrdersByUserId,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order.controllers.js";
const router = express.Router();

router.post("/create-order", authMiddleware , createOrder);
router.get("/order/:userId", authMiddleware, getOrdersByUserId);
router.get("/all-orders", authMiddleware, getAllOrders);
router.put("/order/:orderId", authMiddleware, updateOrderStatus);
router.delete("/order/:orderId", authMiddleware, deleteOrder);

export default router;