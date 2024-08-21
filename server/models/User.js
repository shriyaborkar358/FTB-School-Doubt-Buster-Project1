import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum:['student','teacher','parent','admin'],
    default: 'student',
  },
}, {
  timestamps: true,
});

const User = model("User", userSchema);

export default User;