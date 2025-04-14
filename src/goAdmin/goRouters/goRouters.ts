import express from "express";
import { checkPassword } from "../Controllergo/gocontroller";
const routerSignUp = express.Router();
routerSignUp.post("/", checkPassword);
export default routerSignUp;
