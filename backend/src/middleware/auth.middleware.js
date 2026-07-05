import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access. Please log in.",
      });

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({
          message: "Unauthorized access. User not found.",
        });
      }

      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access. Invalid token.",
    });
  }
};
