import { UserDTO } from "../../dtos/user.dto";

export interface IAuthService {
  register(userData: UserDTO): Promise<UserDTO>;
  login(
    email: string,
    password: string,
  ): Promise<{ token: string; user: UserDTO }>;
}
