import { ConsultDTO } from "dtos/consult.dto";

export interface IConsultService {
  register(consult: ConsultDTO, userId: number): Promise<ConsultDTO>;
  find(id: number): Promise<ConsultDTO>;
  update(consult: ConsultDTO, id: number): Promise<ConsultDTO>;
  remove(id: number): Promise<ConsultDTO>;
}
