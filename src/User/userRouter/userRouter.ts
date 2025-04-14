import express from "express";
import { signIn } from "../userController/userController";
const signinrouter = express.Router();
signinrouter.post("/", signIn);
export default signinrouter;
