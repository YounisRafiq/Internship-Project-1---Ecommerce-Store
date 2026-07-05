import express from "express";
import upload from "../middleware/multer.middleware.js";
import productController from "../controllers/product.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post(
  "/product/create",
  authMiddleware,
  upload.array("images", 4),
  productController.createProduct,
);

router.get("/product/:id", productController.getProductById);
router.get("/products", productController.getAllProducts);

export default router;
