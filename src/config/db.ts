import { prisma } from "../prisma/prismaClient";

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.info("Base de datos conectada exitosamente");
  } catch (error) {
    console.error("La conexión a la base de datos falló:", error);
    process.exit(1);
  }
};

export default connectDB;
