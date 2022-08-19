import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    phone: {
        type: Number,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },

    address1: {
        type: String,
        required: true,
        maxlength: 200,
    },
    address2: {
        type: String,
        required: true,
        maxlength: 200,
    },
    country: {
        type: String,
        required: true,

    },

    state: {
        type: String,
        required: true,

    },
    pincode: {
        type: Number,
        required: true,

    },
    total: [],
    product_Orders: [],
    status: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.models.Order2 || mongoose.model("Order2", OrderSchema);