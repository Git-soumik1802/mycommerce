import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, required: true, default: 1 }
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending', required: true }
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
