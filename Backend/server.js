import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SolRouter from "./routes/Solution";
import IndusRouter from "./routes/Solution";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT && 8000;
app.use("/sol", SolRouter);
app.use("/indus", IndusRouter);
app.listen(port, () => console.log(` server started at port ${port}`));
