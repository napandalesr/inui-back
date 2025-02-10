import { Container } from "inversify";
import { IAuthService } from "../services/auth/IAuthService";
import { AuthService } from "../services/auth/authService";
import { IUserService } from "services/user/IUserService";
import { UserService } from "services/user/userService";
import { IConsultService } from "services/consult/IConsultService";
import { ConsultService } from "services/consult/consultService";
import { CheckInService } from "services/checkIn/checkInService";
import { ICheckIngService } from "services/checkIn/ICheckIngService";

// Crear el contenedor
const container = new Container();

// Registrar servicios
container.bind<IAuthService>("IAuthService").to(AuthService);
container.bind<IUserService>("IUserService").to(UserService);
container.bind<IConsultService>("IConsultService").to(ConsultService);
container.bind<ICheckIngService>("ICheckIngService").to(CheckInService);

export { container };
