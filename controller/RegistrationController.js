/* eslint-disable no-undef */
import userModel from "../model/userModel.js";
import { ErrorHandler } from "./ErrorController.js";
import request from "request";

export const Register = async (req, res) => {
  try {
    const data = {
      to: "2348131065776",
      from: "RCCGTMP",
      sms: "Thank you for registering for the Couple's night, slated for 28th May, 2022 by 4:00pm at THE VUE Restuarant Novare Central Mall, Wuse Zone 5 Abuja",
      type: "plain",
      api_key: process.env.termii,
      channel: "generic",
    };
    var options = {
      method: "POST",
      url: "https://api.ng.termii.com/api/sms/send",
      headers: {
        "Content-Type": ["application/json", "application/json"],
      },
      body: JSON.stringify(data),
    };
    await userModel.create(req.body);
    res.status(201).json({
      title: "Registration Complete",
      message: "Thank you for registering. See you there",
    });

    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  } catch (error) {
    ErrorHandler(error, res);
  }
};

export const ViewRegistration = async (req, res) => {
  const attendees = await userModel.find();
  res.json({ attendees });
};
