import mongoose, { Schema } from "mongoose";

export interface ICATEGORY extends Document {
  categoryName: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const categorySchemaType: Schema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
export default mongoose.model<ICATEGORY>(
  "FOOD-CATEGORY-test",
  categorySchemaType
);
