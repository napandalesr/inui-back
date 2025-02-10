import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface RequestWithUser extends Request {
  user?: any;
}

//Validar token
const authMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token no recibido", authorized: false });
  } else {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "token inválido", authorized: false });
      }

      req.user = decoded;
      next();
    });
  }
};

export default authMiddleware;
