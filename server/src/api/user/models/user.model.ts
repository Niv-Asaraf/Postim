import mongoose, { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);
export default User;
