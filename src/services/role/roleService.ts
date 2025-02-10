import { injectable } from "inversify";
import { prisma } from "prisma/prismaClient";
import { IRoleService } from "./IRoleService";

@injectable()
export class RoleService implements IRoleService {
  async findAll() {
    return await prisma.role.findMany();
  }
}
