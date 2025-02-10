import { Router } from "express";
import { UserController } from "controllers/userController";

const router = Router();

const userController = new UserController();

// Rutas de gestión de usuarios
router.patch("/user/:id", userController.update.bind(userController));
router.get("/user/:id", userController.find.bind(userController));
router.get(
  "/user/document/:id",
  userController.findDocument.bind(userController),
);
router.delete("/user/:id", userController.remove.bind(userController));
router.get("/user", userController.findAll.bind(userController));

export default router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios.
 *
 * /user/{id}:
 *   patch:
 *     summary: Actualizar un usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: user
 *         description: Datos del usuario a actualizar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lastName:
 *               type: string
 *             phone:
 *               type: string
 *             address:
 *               type: string
 *             typeDocument:
 *               type: string
 *             document:
 *               type: string
 *             age:
 *               type: integer
 *             occupation:
 *               type: string
 *             birthdate:
 *               type: string
 *             eps:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       400:
 *         description: Datos incorrectos o faltantes.
 *
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a consultar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente.
 *
 * /user:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *       401:
 *         description: No autorizado
 * 
 * /user/document/{document}:
 *   get:
 *     summary: Obtener usuario por N° de documento
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: document
 *         required: true
 *         description: Documento del usuario a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *       401:
 *         description: No autorizado
 */
