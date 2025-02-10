import { Router } from "express";

import { CheckInController } from "controllers/checkInController";

const router = Router();
const checkInController = new CheckInController();

// Rutas de autenticación
router.post(
  "/checkin/:idConsult/:idDoctor",
  checkInController.register.bind(checkInController),
);
router.delete("/checkin/:id", checkInController.remove.bind(checkInController));


export default router;

/**
 * @swagger
 * tags:
 *   name: checkIn
 *   description: Operaciones relacionadas con roles.
 *
 * /register/{idConsult}/{idDoctor}:
 *   post:
 *     summary: Guardar checkIn
 *     tags: [checkIn]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               observation:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: idConsult
 *         required: true
 *         description: ID de la consulta.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idDoctor
 *         required: true
 *         description: ID del medico.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Checkin guardado exitosamente.
 *
 * /checkin/{id}:
 *   delete:
 *     summary: Eliminar checkIn
 *     tags: [checkIn]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del checkIn a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: checkIn eliminado exitosamente.
 */
