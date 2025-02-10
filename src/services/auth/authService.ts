import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import { prisma } from "../../prisma/prismaClient";

import { UserDTO } from "../../dtos/user.dto";
import { IAuthService } from "./IAuthService";

@injectable()
export class AuthService implements IAuthService {
  async register(userData: UserDTO) {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error("El correo ya está registrado.");
    }

    const existingUserByDoc = await prisma.user.findUnique({
      where: { document: userData.document },
    });

    if (existingUserByDoc) {
      throw new Error("El documento ya está registrado.");
    }

    const hashedPassword = await bcrypt.hash(userData.password || "", 10);
    const { password, ...rest } = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
    });

    return rest;
  }

  async login(email: string, pass: string) {
    const userSeleted = await prisma.user.findUnique({ where: { email } });

    if (!userSeleted || !(await bcrypt.compare(pass, userSeleted.password))) {
      throw new Error("Credenciales incorrectas.");
    }

    const token = jwt.sign({ userId: userSeleted.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const { password, ...user } = userSeleted;

    return { token, user };
  }
}
