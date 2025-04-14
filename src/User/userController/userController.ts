import { Request, Response } from "express";
import UserSchemaType from "../userModels/userModels";
import { compareSync } from "bcryptjs";
export const signIn = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    console.log(" password:>> ", password);
    console.log("email :>> ", email);
    if (!email || !password) {
      res.status(400).json({ message: "email nuuts ug oruul" });
      return;
    }
    const user = await UserSchemaType.findOne({ email });
    console.log("user :>> ", UserSchemaType);
    if (!user) {
      res.status(404).json({ message: "hereglegch burtgelgui baina" });
      return;
    }
    if (!user.password) {
      res.status(500).json({ message: "nuuts ug oldsongui" });
      return;
    }
    const isCorrect = compareSync(password, user.password);
    console.log(user.password);
    console.log(password);
    if (!isCorrect) {
      res.status(401).json({ message: "nuuts ui buruu baina" });
      return;
    }
    res.status(200).json({ message: "succses signUp" });
  } catch (error) {
    res.status(500).json({ message: "newtrehed aldaa garlaa" });
  }
};
