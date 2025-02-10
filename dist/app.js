"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Importar reflect-metadata para usar decoradores
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import authMiddleware from '@middlewares/authMiddleware';
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
//import consultaRoutes from './routes/consultaRoutes';
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas
app.use("/api/auth", authRoutes_1.default);
//app.use('/api/consultas', consultaRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map
