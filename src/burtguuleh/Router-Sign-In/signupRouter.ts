import express from "express";
import { SignUp } from "../Controller-Sign-Up/signupController";
const routerSignUp = express.Router();
routerSignUp.post("/", SignUp);
export default routerSignUp;
