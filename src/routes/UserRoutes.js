import express from 'express';
import { registerUser, getUserById, updateUser, deleteUser, listUsers, login, changePassword } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);

// Rutas protegidas
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
router.get('/', authMiddleware, listUsers);
router.put('/password/:id', authMiddleware, changePassword);

export default router;
