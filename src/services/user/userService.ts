import { injectable } from "inversify";

import { UserDTO } from "dtos/user.dto";
import { IUserService } from "./IUserService";
import { prisma } from "../../prisma/prismaClient";

@injectable()
export class UserService implements IUserService {
  async update(userData: UserDTO, id: number) {
    const existingUser = await prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });

    if (!existingUser) {
      throw new Error("Usuario no encontrado");
    }

    return await prisma.user.update({
      data: userData,
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });
  }

  async find(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        consult: true,
      },
      omit: {
        password: true,
      },
    });
  }

  async findDocument(id: string) {
    return await prisma.user.findUnique({
      where: { document: id },
      include: {
        consult: {
          include: {
            user: true
          }
        },
      },
      omit: {
        password: true,
      },
    });
  }

  async findAll() {
     const response = await prisma.user.findMany({
      where: {
        enable: true,
        roleId: 2,
      },

      include: {
        role: true,
        consult: {
          take: 1,
          orderBy: {
            id: 'desc',
          },
          include: {
            CheckIn: {
              include: {
                user: {
                  omit: {
                    password: true
                  }
                },
              },
            },
          },
        },
      },
      omit: {
        password: true,
      },
    });

    return response;
  }

  async remove(id: number) {
    const existingUser = await prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });

    if (!existingUser) {
      throw new Error("Usuario no encontrado");
    }

    return await prisma.user.delete({
      where: { id },
    });
  }
}
