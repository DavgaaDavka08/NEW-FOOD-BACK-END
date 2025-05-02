import mongoose from "mongoose";

export enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

export interface IFoodOrderItem {
  food: string;
  quantity: number;
}

export interface IFoodOrder {
  user: string;
  totalPrice: number;
  foodOrderItems: IFoodOrderItem[];
  status: FoodOrderStatusEnum;
  createdAt?: Date;
  updatedAt?: Date;
}

const FoodOrderItemSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const FoodOrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "test-user",
      required: true,
    },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },
    status: {
      type: String,
      enum: Object.values(FoodOrderStatusEnum),
      default: FoodOrderStatusEnum.PENDING,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodOrder", FoodOrderSchema);
