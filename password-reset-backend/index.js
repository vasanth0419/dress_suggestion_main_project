import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./Database/Dbconfig.js";
import userrouter from "./Router/User.router.js";
import dressrouter from "./Router/Dress.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/user", userrouter);
app.use("/dresses", dressrouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
