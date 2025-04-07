import { Request, Response } from "express";
import categorySchemaType from "../Models/category-models";
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const getcategory = await categorySchemaType.find();
    res.status(200).json({ massage: "amjilttai hadgallaa", getcategory });
  } catch (error) {
    res.status(400).json({ message: "Нэмэхэд алдаа гарлаа", error });
  }
};
export const addCategory = async (req: Request, res: Response) => {
  try {
    const connectCategory = req.body;
    const addcategory = await categorySchemaType.create(connectCategory);
    res.status(200).json({ massage: "amjilttai nemlee", addcategory });
    console.log("addcategory :>> ", addcategory);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "nemhed алдаа гарлаа", error });
  }
};
export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteId = req.params.id;
    console.log("deleteId :>> ", deleteId);
    const deletecategory = await categorySchemaType.deleteMany();
    if (!deletecategory) {
      res
        .status(404)
        .json({ massage: "ustgah ym baihgvv baina oldsongui", deletecategory });
    }
    res.status(200).json({ massage: "amjilttai ustgalaa", deletecategory });
    console.log("deletecategory :>> ", deletecategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ustgahad алдаа гарлаа", error });
  }
};
export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updeteId = req.params.id;
    console.log("deleteId :>> ", updeteId);
    if (!updeteId) {
      res.status(400).json({ message: "ID илгээх шаардлагатай!" });
      return;
    }
    const updateData = req.body;
    if (!updateData || Object.keys(updateData).length === 0) {
      res.status(400).json({ message: "Шинэчлэх өгөгдөл байхгүй байна!" });
      return;
    }
    const updatecategory = await categorySchemaType.findByIdAndUpdate(
      updeteId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatecategory) {
      res.status(404).json({ message: "Ангилал олдсонгүй" });
      return;
    }
    res.status(200).json({ massage: "amjilttai zaslaa", data: updatecategory });
    console.log("updatecategory :>> ", updatecategory);
  } catch (error) {
    console.error("Ангилал шинэчлэхэд алдаа гарлаа:", error);
    res.status(500).json({ message: "zashad алдаа гарлаа", error });
  }
};
