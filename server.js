import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import noteRouter from "./routes/routes.js";
import cors from "cors";
const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

const app = express();
config();

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Il server è in ascolto sulla porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api", noteRouter);
