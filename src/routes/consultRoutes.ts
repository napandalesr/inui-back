import { ConsultController } from "controllers/consultController";
import { Router } from "express";

const router = Router();

const consultController = new ConsultController();

// Rutas de gestión de consultas
router.post("/consult/:id", consultController.register.bind(consultController));
router.get("/consult/:id", consultController.find.bind(consultController));
router.patch("/consult/:id", consultController.update.bind(consultController));
router.delete("/consult/:id", consultController.remove.bind(consultController));

export default router;

/**
 * @swagger
 * tags:
 *   name: Consult
 *   description: Operaciones relacionadas con consultas.
 *
 * /consult/{id}:
 *   post:
 *     summary: Guardar consulta
 *     tags: [Consult]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               diagnostic:
 *                 type: string
 *               treatment:
 *                 type: string
 *               date:
 *                 type: string
 *               reason:
 *                 type: string
 *               status:
 *                 type: string
 *                 example: Estable
 *               type:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario de la consulta.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Consulta guardada exitosamente.
 *
 *   patch:
 *     summary: Actualizar consulta
 *     tags: [Consult]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la consulta.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: consult
 *         description: Datos de la consulta a actualizar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             diagnostic:
 *               type: string
 *             treatment:
 *               type: string
 *             date:
 *               type: string
 *             reason:
 *               type: string
 *             status:
 *               type: string
 *             type:
 *               type: string
 *     responses:
 *       200:
 *         description: Consulta guardada exitosamente.
 *
 *   delete:
 *     summary: Eliminar consulta
 *     tags: [Consult]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la consulta.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Consulta guardada exitosamente.
 *
 *   get:
 *     summary: Obtener consulta por ID
 *     tags: [Consult]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la consulta.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Consulta obtenida exitosamente.
 */
