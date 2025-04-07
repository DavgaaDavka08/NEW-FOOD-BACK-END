import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./DB/data-base";
import category from "../src/Food/Router/category-router";
import food from "../src/Food/Router/food-router";
const app = express();
app.use(bodyParser.json());
app.use(cors());
configDotenv();
ConnectDB();
const port = process.env.PORT;
app.use("/food", food);
app.use("/api", category);
app.listen(port, () => {
  console.log(`port is runing at:>${port}`);
});
