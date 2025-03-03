"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
  var _a;
  const token =
    (_a = req.headers["authorization"]) === null || _a === void 0
      ? void 0
      : _a.split(" ")[1]; // Bearer token
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jsonwebtoken_1.default.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    },
  );
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map
