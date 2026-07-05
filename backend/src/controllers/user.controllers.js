import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../../services/cloudinary.service.js";

const registerUser = async (req, res) => {
  const { firstName, secondName, email, password, confirmPassword } = req.body;

  if (
    [firstName, secondName, email, password, confirmPassword].some(
      (field) => !field?.trim(),
    )
  ) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }

  if (password !== confirmPassword) {
    return res.status(401).json({
      message: "Password don't match , try again",
    });
  }

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User Already Exist",
    });
  }

  let avatar = null;

  if (req.file) {
    avatar = await uploadOnCloudinary(req.file, "ecommerce/avatars");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    firstName,
    secondName,
    email,
    password: hashedPassword,
    ...(avatar && { avatar }),
  });

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error , Please Try Again",
    });
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" },
  );

  const options = {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  res.cookie("token", token, options);

  return res.status(201).json({
    success: true,
    message: "User Registered SuccessFully",
    user: {
      _id: user._id,
      firstName: user.firstName,
      secondName: user.secondName,
      email: user.email,
      avatar: user.avatar,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => !field?.trim())) {
    return res.status(401).json({
      success: false,
      message: "Email or Password is Invalid",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found , Please SignUp First",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    },
  );

  const options = {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  res.cookie("token", token, options);

  return res.status(201).json({
    success: true,
    message: "User LoggedIn SuccessFully",
    user: {
      _id: user._id,
      firstName: user.firstName,
      secondName: user.secondName,
      email: user.email,
      avatar: user.avatar,
    },
  });
};

const logoutUser = async (req, res) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "User Already LoggedOut",
    });
  }

  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "User LoggedOut SuccessFully",
  });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
};
