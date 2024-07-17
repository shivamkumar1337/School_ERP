const jwt = require("jsonwebtoken");
const { User } = require("../models/db");
const { JWT_SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(403)
        .json({ message: "Unauthorized, JWT token is require" });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findByPk(decoded.userId);
      if (!req.user) throw new Error("User not found");
      next();
    } catch (err) {
      return res
        .status(403)
        .json({ message: "Unauthorized, JWT token wrong or expired" });
    }
};

module.exports = authMiddleware;
