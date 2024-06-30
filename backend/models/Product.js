import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        price:{
            type:Number,
            required:true,
            unique:true
        },
        quantity:{
            type:Number,
            required:true,
        },
        sales:{
            type:Number,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        discount:{
            type:Number,
            require:false
        },
        photo:{
            type: String,
            default: "",
            required: true,
        },
        origin:{
            type:String,
            required:true,
        },
        reviews:{
            type:Number,
            required:true,

        },
        reviewtext: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Review",
            },
        ],
        featured: {
            type: Boolean,
            default: false,
          },
        },
        { timestamps: true },
    
)
export default mongoose.model("Product", productSchema);