import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    comment: { type: String, required: true }
}, {timestamps: true});

const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, default: false },
    reviews: [reviewSchema],
    rating: { type: Number, default: 0, required: true },
    numReviews: { type: Number, default: 0, required: true },
    price: { type: Number, default: 0, required: true },
    countInStock: { type: Number, default: 0, required: true }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;