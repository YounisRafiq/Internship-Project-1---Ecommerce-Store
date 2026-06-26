import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  prodcuts: [
    {
      prodcut: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    },
  ],

  quantity: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("Cart" , cartSchema);

export default Cart;
