import mongoose from "mongoose";
const publishSchema = new mongoose.Schema(
  {
    imageUrl1: {
      type: String,
      required: true,
    },
    imageUrl2: {
      type: String,
      required: true,
    },
    imageUrl3: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    furnished: {
      type: String,
      required: true,
    },
    independent: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Publish = mongoose.model("Publish", publishSchema);
