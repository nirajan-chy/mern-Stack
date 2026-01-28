import { User } from "../schema/user.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUserController = async (req, res) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      password: hashedPassword,
    };

    const result = await User.create(data);
    res.status(201).json({
      message: "User Registered Successfull",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const getAllUserController = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({
      sms: "User fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const getSpecificUserController = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const result = await User.findById(id);
    res.status(200).json({
      message: "User fetched",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await User.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      message: "User fetched successfuly",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const result = await User.findOne({ email: req.body.email });
    if (!result) {
      res.status(400).json({
        message: "Invalid Credential",
      });
    }
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      result.password
    );
    if (!isValidPassword) {
      res.status(400).json({
        message: "Invalid Credential",
      });
    }

    let infoObj = {
      id: result._id,
      email: result.email,
    };

    const secretKey = "secret";

    const token = jwt.sign(infoObj, secretKey, { expiresIn: "1h" });

    res.status(200).json({
      message: "User logged In successfully",
      data: result,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
