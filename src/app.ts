import "reflect-metadata"; // Importar reflect-metadata para usar decoradores
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authMiddleware from "./middlewares/authMiddleware";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import roleRoutes from "./routes/roleRoutes";
import consultRoutes from "./routes/consultRoutes";
import checkInRoutes from "./routes/checkInRoutes";
import { setupSwagger } from "config/swagger";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de Swagger
setupSwagger(app);

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api", authMiddleware, userRoutes);
app.use("/api", authMiddleware, roleRoutes);
app.use("/api", authMiddleware, consultRoutes);
app.use("/api", authMiddleware, checkInRoutes);

export default app;
