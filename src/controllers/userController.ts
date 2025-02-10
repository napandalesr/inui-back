import { Request, Response } from "express";

import { container } from "config/dependencyInjection";
import { UserDTO } from "dtos/user.dto";
import { IUserService } from "services/user/IUserService";

export class UserController {
  private userService: IUserService;

  constructor() {
    this.userService = container.get<IUserService>("IUserService");
  }

  async update(req: Request, res: Response): Promise<void> {
    const userData: UserDTO = req.body;
    const id: string = req.params.id;

    try {
      const userUdated = await this.userService.update(userData, parseInt(id));
      res.status(200).json(userUdated);
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

    const user = await this.userService.find(parseInt(id));
    res.status(200).json(user);
  }

  async findDocument(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;

    const user = await this.userService.findDocument(id);
    res.status(200).json(user);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const users = await this.userService.findAll();
    res.status(200).json(users);
  }

  async remove(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    try {
      const users = await this.userService.remove(parseInt(id));
      res.status(200).json(users);
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
