import CropDoctor from "../models/cropDoctor.js";
import Message from "../models/Message.js";

export const getCropDoctorByLanguage = async (req, res) => {
  const { language } = req.query;
  console.log(language);
  try {
    const crop = await CropDoctor.find({ language });
    res.json({ status: 200, crop });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong" });
  }
};

export const postCropDoctor = async (req, res) => {
  console.log(req.body);
  const { name, language, email, phone_number } = req.body;
  try {
    const crop = await CropDoctor.create({
      name,
      language,
      email,
      phone_number,
    });
    return res.json({ status: 201, crop });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const postMessage = async (req, res) => {
  try {
    const newMessage = new Message({
      message: req.body.message,
      status: req.body.status,
    });
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all messages
export const getAllMessages = async (req, res) => {
  try {
    const allMessages = await Message.find();
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json(err);
  }
};
