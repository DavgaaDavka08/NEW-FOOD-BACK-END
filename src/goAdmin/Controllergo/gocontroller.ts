import { Request, Response } from "express";
import goAdmin from "../goModels/gomodels";
import { compareSync } from "bcryptjs";

export const checkPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;

    if (!password) {
      res.status(400).json({ message: "Нууц үгээ оруулна уу" });
      return;
    }

    // анхны хэрэглэгчийг авч байна
    const user = await goAdmin.findOne();

    if (!user) {
      res.status(404).json({ message: "Хэрэглэгч бүртгэгдээгүй байна" });
      return;
    }

    const isCorrect = compareSync(password, user.password);

    if (!isCorrect) {
      res.status(401).json({ message: "Нууц үг буруу байна" });
      return;
    }

    res.status(200).json({ message: "Амжилттай нэвтэрлээ", user });
  } catch (error) {
    res.status(500).json({ message: "Серверийн алдаа гарлаа" });
  }
};
