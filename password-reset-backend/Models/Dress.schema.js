import mongoose from "mongoose";

const dressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  // Add any other fields relevant to your dress collection
});

const Dress = mongoose.model("Dress", dressSchema);

export default Dress;
