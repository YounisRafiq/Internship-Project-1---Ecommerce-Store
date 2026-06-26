import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
    },
    products : {
        type : mongoose.Schema.ObjectId,
        ref : "Product",
        required : true
    }
});

const Products = mongoose.model("Products" , productsSchema);
export default Products;