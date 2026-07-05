import productModel from "../models/product.model.js";
import { uploadMultipleOnCloudinary } from "../../services/cloudinary.service.js";

const createProduct = async (req, res) => {
  const { title, description, category, price, stock, comment } = req.body;

  if (![title, description, category, price].every((field) => field?.toString().trim())) {
    return res.status(400).json({
      success: false,
      message: "Title, description, category, and price are required",
    });
  }

  if (!req.files?.length) {
    return res.status(400).json({
      success: false,
      message: "At least one product image is required",
    });
  }

  const images = await uploadMultipleOnCloudinary(
    req.files,
    "ecommerce/products",
  );

  if (!images.length) {
    return res.status(500).json({
      success: false,
      message: "Failed to upload product images",
    });
  }

  const product = await productModel.create({
    title,
    description,
    category,
    price: Number(price),
    stock: stock ? Number(stock) : 1,
    comment,
    images,
  });

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    product,
  });
};

const getAllProducts = async (req, res) => {
  const products = await productModel.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    products,
  });
};

const getProductById = async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  return res.status(200).json({
    success: true,
    product,
  });
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
};
