import { Router } from "express";

import { RoleController } from "controllers/roleController";

const router = Router();

const role = new RoleController();

// Rutas de gestión de roles
router.get("/role", role.findAll);

export default router;

/**
 * @swagger
 * tags:
 *   name: Rol
 *   description: Operaciones relacionadas con roles.
 *
 * /role:
 *   get:
 *     summary: Obtener roles
 *     tags: [Rol]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Roles obtenidos exitosamente.
 */
