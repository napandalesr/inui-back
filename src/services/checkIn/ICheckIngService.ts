import { checkInDTO } from "dtos/checkIn.dto";

export interface ICheckIngService {
  register(
    checkInData: checkInDTO,
    consultId: number | null,
    doctorId: number | null,
  ): Promise<checkInDTO>;
    remove(id: number): Promise<checkInDTO | null>;
}
