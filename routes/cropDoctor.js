import express from "express";
import {
  getCropDoctorByLanguage,
  postCropDoctor,
  postMessage,
  getAllMessages,
} from "../controllers/cropDoctor.js";
const router = express.Router();

router.get("/getCropDoctorByLanguage", getCropDoctorByLanguage);
router.post("/postCropDoctor", postCropDoctor);
router.post("/postMessage", postMessage);
router.get("/getAllMessage", getAllMessages);

export default router;
