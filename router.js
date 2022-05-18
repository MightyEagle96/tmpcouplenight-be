import express from "express";
import {
  Register,
  ViewRegistration,
} from "./controller/RegistrationController.js";
const router = express.Router();

router
  .get("/", (req, res) => res.json({ message: "Hello" }))
  .post("/register", Register)
  .get("/attendees", ViewRegistration);

export default router;
