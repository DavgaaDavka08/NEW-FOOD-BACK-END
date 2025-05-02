import { Request, Response } from "express";
import FoodOrderSchema from "../../Order/Models/orderModels";
export const GetOrder = async (req: Request, res: Response) => {
  try {
    const getorder = await FoodOrderSchema.find()
      .populate("user", "email address")
      .populate("foodOrderItems.food", "foodName image price");
    res.status(200).json({ message: "amjilttai order hadgallaa", getorder });
  } catch (error) {
    res.status(500).json({ message: "order aldaa garlaa", error });
    console.log("error :>> ", error);
  }
};
// controllers/orderController.ts

// import { Request, Response } from "express";
// import FoodOrderSchema from "../../Order/Models/orderModels";

// export const CreateOrder = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { user, foodOrderItems, totalPrice } = req.body;

//     if (!user || !foodOrderItems || !totalPrice) {
//       res.status(400).json({ message: "Бүх талбарыг бөглөнө үү." });
//     }

//     const newOrder = await FoodOrderSchema.create({
//       user,
//       foodOrderItems,
//       totalPrice,
//       status: "PENDING", // эсвэл Enum ашигладаг бол FoodOrderStatusEnum.PENDING
//     });

//     res.status(201).json({ message: "Захиалга амжилттай нэмэгдлээ", newOrder });
//   } catch (error) {
//     console.error("Захиалга нэмэхэд алдаа гарлаа:", error);
//     res.status(500).json({ message: "Алдаа гарлаа", error });
//   }
// };
