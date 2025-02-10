import { Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

import { container } from "config/dependencyInjection";
import { ConsultDTO } from "dtos/consult.dto";
import { IConsultService } from "services/consult/IConsultService";

export class ConsultController {
  private consultorService: IConsultService;

  constructor() {
    this.consultorService = container.get<IConsultService>("IConsultService");
  }

  async register(req: Request, res: Response): Promise<void> {
    const consultData = plainToInstance(ConsultDTO, req.body);
    const id: string = req.params.id;

    const errors = await validate(consultData);
    if (errors.length > 0) {
      const errorsFormat = errors.flatMap(error => error.constraints ? Object.values(error.constraints) : [])
      .join(' * ');
      res.status(400).json({ error: "* "+errorsFormat });
      return;
    }

    try {
      const consultNew = await this.consultorService.register(
        consultData,
        parseInt(id),
      );
      res.status(201).json(consultNew);
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

  async find(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const consult = await this.consultorService.find(parseInt(id));
    res.status(200).json(consult);
  }

  async update(req: Request, res: Response): Promise<void> {
    const consultData: ConsultDTO = req.body;
    const id: string = req.params.id;

    try {
      const consultUdated = await this.consultorService.update(
        consultData,
        parseInt(id),
      );
      res.status(200).json(consultUdated);
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
    try {
      const consult = await this.consultorService.remove(parseInt(id));
      res.status(200).json(consult);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
      } else {
        console.log("Error desconocido", error);
        res.status(400).json({ error: "Error desconocido" });
      }
    }
  }
}
