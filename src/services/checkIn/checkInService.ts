import { injectable } from "inversify";

import { checkInDTO } from "dtos/checkIn.dto";
import { prisma } from "prisma/prismaClient";
import { ICheckIngService } from "./ICheckIngService";

@injectable()
export class CheckInService implements ICheckIngService {
  async register(
    checkInData: checkInDTO,
    consultId: number | null,
    doctorId: number | null,
  ) {
    return await prisma.checkIn.create({
      data: { ...checkInData, consultId, doctorId },
    });
  }

  async remove(id: number) {
    const existingCheckin = await prisma.checkIn.findUnique({
      where: { id }
    });

    if (!existingCheckin) {
      throw new Error("Checkin no encontrado");
    }

    return await prisma.checkIn.delete({
      where: { id },
    });
  }
}
