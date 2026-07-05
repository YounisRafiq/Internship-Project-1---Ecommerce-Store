import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cart.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/add-to-cart", authMiddleware, addToCart);
router.get("/get-cart", authMiddleware, getCart);
router.delete("/remove-from-cart/:productId", authMiddleware, removeFromCart);
 export default router;