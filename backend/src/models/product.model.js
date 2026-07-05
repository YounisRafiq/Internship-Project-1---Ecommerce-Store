import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Men", "Women", "Electronics", "Shoes", "Books", "Other"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 100,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    stock: {
      type: Number,
      default: 1,
    },
    comment: {
      type: String,
      trim: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        publicId: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
