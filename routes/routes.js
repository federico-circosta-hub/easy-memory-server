import { Router } from "express";
import scoreModel from "../model/scoreModel.js";

const scoreRouter = Router();

//Post Method
scoreRouter.post("/post/score", async (req, res) => {
  const data = new scoreModel({
    username: req.body.username,
    score: req.body.score,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
});

//Get all Method
scoreRouter.get("/get/score", async (req, res) => {
  try {
    const data = await scoreModel.find().sort({ score: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default scoreRouter;
