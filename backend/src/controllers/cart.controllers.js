import productModel from "../models/product.model.js";
import cartModel from "../models/cart.model.js";

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    if (!productId || !quantity) {
      return res.status(400).json({
        message: "Product ID & Quantity is required",
      });
    }

    const cartItem = {
      product: productId,
      quantity: quantity ?? 1,
    };

    const existinCartProdcut = await cartModel.findOne();

    if (existinCartProdcut) {
      const productIndex = existinCartProdcut.products.findIndex(
        (item) => item.product.toString() === productId,
      );

      if (productIndex > -1) {
        existinCartProdcut.products[productIndex].quantity += quantity;
      } else {
        existinCartProdcut.products.push(cartItem);
      }

      const updatedCart = await existinCartProdcut.save();
      return res.status(200).json({
        message: "Product added to cart successfully",
        data: updatedCart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await cartModel.findOne().populate("products.product");

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    return res.status(200).json({
      message: "Cart retrieved successfully",
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  try{
   if(!productId) {
    return res.status(400).json({
      message: "Product ID is required",
    });
   };

    const cart = await cartModel.findOne();
    
    if(!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    };


    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId,
    );

    if(productIndex > -1) {
      cart.products.splice(productIndex, 1);
      const updatedCart = await cart.save();
      return res.status(200).json({
        message: "Product removed from cart successfully",
        data: updatedCart,
      });
    }

  } catch(error){
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }

}
