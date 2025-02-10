import { Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

import { UserDTO } from "../dtos/user.dto";
import { IAuthService } from "../services/auth/IAuthService";
import { container } from "../config/dependencyInjection";

export class AuthController {
  private authService: IAuthService;

  constructor() {
    this.authService = container.get<IAuthService>("IAuthService");
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const userData = plainToInstance(UserDTO, req.body);

      const errors = (await validate(userData));
      if (errors.length > 0) {
        const errorsFormat = errors.flatMap(error => error.constraints ? Object.values(error.constraints) : [])
        .join(' * ');
        res.status(400).json({ error: "* "+errorsFormat });
        return;
      }
      
      const newUser = await this.authService.register({ ...userData });
      res.status(201).json(newUser);
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

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      try {
        const token = await this.authService.login(email, password);
        res.status(200).json({ ...token });
        
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
          res.status(400).json({ error: error.message });
        } else {
          console.log("Error desconocido", error);
          res.status(400).json({ error: "Error desconocido" });
        }
      }
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }
}
