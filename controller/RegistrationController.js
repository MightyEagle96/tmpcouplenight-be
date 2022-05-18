import userModel from "../model/userModel.js";
import { ErrorHandler } from "./ErrorController.js";

export const Register = async (req, res) => {
  try {
    await userModel.create(req.body);
    res
      .status(201)
      .json({
        title: "Registration Complete",
        message: "Thank you for registering. See you there",
      });
  } catch (error) {
    ErrorHandler(error, res);
  }
};

export const ViewRegistration = async (req, res) => {
  const attendees = await userModel.find();
  res.json({ attendees });
};
