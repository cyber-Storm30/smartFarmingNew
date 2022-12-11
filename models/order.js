import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        selectedQuantity: {
          type: String,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: String,
      required: true,
    },
    orderAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    orderStatus: {
      type: String,
      enum: ["To Be Shipped", "Shipped", "Delivered"],
      default: "To Be Shipped",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
