import { Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

import { container } from "config/dependencyInjection";
import { checkInDTO } from "dtos/checkIn.dto";
import { ICheckIngService } from "services/checkIn/ICheckIngService";

export class CheckInController {
  private checkInService: ICheckIngService;

  constructor() {
    this.checkInService = container.get<ICheckIngService>("ICheckIngService");
  }

  async register(req: Request, res: Response): Promise<void> {
    const checkInData = plainToInstance(checkInDTO, req.body);
    const { idConsult, idDoctor } = req.params;

    const errors = await validate(checkInData);
    if (errors.length > 0) {
      const errorsFormat = errors.flatMap(error => error.constraints ? Object.values(error.constraints) : [])
      .join(' * ');
      res.status(400).json({ error: "* "+errorsFormat });
      return;
    }

    try {
      const checkInNew = await this.checkInService.register(
        checkInData,
        parseInt(idConsult),
        parseInt(idDoctor),
      );
      res.status(201).json(checkInNew);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
      } else {
        console.log("Error desconocido", error);
        res.status(400).json({ error: "Error desconocido" });
      }
    }

    
    
  }

  async remove(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const check = await this.checkInService.remove(parseInt(id));
    res.status(200).json(check);
  }
}
