import { UserDTO } from "../../dtos/user.dto";

export interface IUserService {
  update(userData: UserDTO, id: number): Promise<UserDTO>;
  find(id: number): Promise<UserDTO | null>;
  remove(id: number): Promise<UserDTO | null>;
  findAll(): Promise<UserDTO[]>;
  findDocument: (id: string) => Promise<UserDTO | null>;
}
