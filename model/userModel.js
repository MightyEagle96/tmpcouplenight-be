import mongoose from "mongoose";

const { Schema, model } = mongoose;

const registerSchema = new Schema({
  title: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: [true, "Email address already exists"] },
  phone: String,
  spouse: String,
  expectation: String,
});

export default model("Registration", registerSchema);
