import mongoose from "mongoose";
export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("holbolt amjilttai");
  } catch (error) {
    console.log("holbolt amjiltgui", error);
  }
};
