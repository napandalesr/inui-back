import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos antes de iniciar el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.info(`Servidor en ejecución en el puerto ${PORT}`);
  });
});
