import { Router, Request, Response } from "express";
import { AuthController } from "../controllers/authController";
import authMiddleware from "middlewares/authMiddleware";

const router = Router();
const authController = new AuthController();

// Rutas de autenticación
router.post("/register", authController.register.bind(authController));
router.post("/login", authController.login.bind(authController));
router.get(
  "/verify-token",
  authMiddleware,
  (req: Request, res: Response): void => {
    res.json({ authorized: true });
  },
);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operaciones relacionadas con la autenticación.
 *
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               typeDocument:
 *                 type: string
 *               document:
 *                 type: string
 *               age:
 *                 type: integer
 *                 example: 29
 *               occupation:
 *                 type: string
 *               birthdate:
 *                 type: string
 *               eps:
 *                 type: string
 *               email:
 *                 type: string
 *                 example: string@string.com
 *               password:
 *                 type: string
 *               role:
 *                 type: object
 *                 properties:
 *                   connect:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Datos incorrectos o usuario ya registrado.
 *
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión de un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: string@string.com
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente.
 *       400:
 *         description: Usuario o contraseña incorrectos.
 */

export default router;
