import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productID:{
        type:mongoose.Schema.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    photo: {
          type: String,
          required: true,
    },
     quantity: {
          type: Number,
          required: true,
          default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
      
    
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
