import mongoose from "mongoose";
import db from "../config/DBconnection.js"
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const ProductM=db.model('Product', productSchema);
export default ProductM;
 

