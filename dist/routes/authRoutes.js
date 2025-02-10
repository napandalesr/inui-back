"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Inyectamos automáticamente AuthController
const authController = new authController_1.AuthController();
// Rutas de autenticación
// Usar bind para enlazar el contexto
router.post("/register", authController.register.bind(authController));
router.post("/login", authController.login.bind(authController));
exports.default = router;
//# sourceMappingURL=authRoutes.js.map
