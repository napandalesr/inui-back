"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const authService_1 = require("../services/auth/authService");
// Crear el contenedor
const container = new inversify_1.Container();
exports.container = container;
// Registrar el servicio
container.bind("IAuthService").to(authService_1.AuthService);
//# sourceMappingURL=dependencyInjection.js.map
