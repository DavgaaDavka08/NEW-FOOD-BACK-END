import mongoose, { Schema, Document } from "mongoose";

interface IGoAdmin extends Document {
  password: string;
}

const GoAdminSchema: Schema = new Schema({
  password: { type: String, required: true },
});

export default mongoose.model<IGoAdmin>("GoAdmin", GoAdminSchema);
