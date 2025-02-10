import { injectable } from "inversify";
import { prisma } from "../../prisma/prismaClient";
import { ConsultDTO } from "dtos/consult.dto";

@injectable()
export class ConsultService {
  async register(consult: ConsultDTO, userId: number) {
    const existingConsult = await prisma.consult.findFirst({
      where: { userId },
      include: {
        user: true,
      },
    });

    if (existingConsult !== null) {
      throw new Error("El usuario ya tiene consulta registrada.");
    }

    return await prisma.consult.create({
      data: { ...consult, userId },
    });
  }

  async find(id: number) {
    const consult = await prisma.consult.findFirst({
      where: { id },
    });

    if (!consult) {
      throw new Error("Consulta no encontrada");
    }

    return consult;
  }

  async update(consult: ConsultDTO, id: number) {
    const existingConsult = await prisma.consult.findFirst({
      where: { id },
    });

    if (!existingConsult) {
      throw new Error("El usuario no tiene consulta registrada.");
    }

    return await prisma.consult.update({
      data: consult,
      where: { id },
    });
  }

  async remove(id: number) {
    const existingConsult = await prisma.consult.findUnique({
      where: { id },
    });

    if (!existingConsult) {
      throw new Error("Consulta no encontrada");
    }

    return await prisma.consult.delete({
      where: { id },
    });
  }
}
