import mongoose, { Schema } from "mongoose";
interface IUSER extends Document {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: string[];
  role: "USER" | "ADMIN";
  createdAt?: Date;
  updatedAt?: Date;
}
const UserSchemaType: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    orderedFoods: { type: [Schema.ObjectId], ref: "FoodOrder" },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);
export default mongoose.model<IUSER>("test-user", UserSchemaType);
