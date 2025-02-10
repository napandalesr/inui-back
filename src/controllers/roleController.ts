import { Request, Response } from "express";

import { RoleService } from "services/role/roleService";

export class RoleController {
  async findAll(req: Request, res: Response): Promise<void> {
    const roleService = new RoleService();
    const role = await roleService.findAll();
    res.status(200).json(role);
  }
}
