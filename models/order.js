// getting-started.js
import mongoose from 'mongoose';

const oderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        productId: { type: String },
        quantity: { type: Number, required: true, default: 1 }
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending', required: true }
}, { timestamps: true });

export default mongoose.model("order", orderSchema);