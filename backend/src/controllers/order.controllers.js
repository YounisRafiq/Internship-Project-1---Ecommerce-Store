import orderModel from "../models/order.model.js";
import productModel from "../models/product.model.js";
import userModel from "../models/user.model.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!userId || !products || products.length === 0) {
      return res
        .status(400)
        .json({ message: "User ID and products are required" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const orderProducts = await Promise.all(
      products.map(async (product) => {
        const foundProduct = await productModel.findById(product.productId);
        if (!foundProduct) {
          throw new Error(`Product with ID ${product.productId} not found`);
        }
        return {
          productId: foundProduct._id,
          quantity: product.quantity,
        };
      }),
    );

    const order = new orderModel({
      userId: user._id,
      products: orderProducts,
    });

    const savedOrder = await order.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    req
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await orderModel
      .find({ userId })
      .populate("products.productId");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    return res.status(200).json({
      message: "Orders retrieved successfully",
      orders: orders,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("products.productId");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    return res.status(200).json({
      message: "Orders retrieved successfully",
      orders: orders,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["pending", "completed", "cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    const updatedOrder = await order.save();

    return res.status(200).json({
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({ message: "Order ID is required" });
    }

    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.remove();
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Internal server error",
        order: order,
        error: error.message,
      });
  }
};
