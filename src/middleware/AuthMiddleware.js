import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // Obtener el token desde el header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No token, autorización denegada' });
    }

    try {
        // Verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Agregar el usuario desde el payload
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no es válido' });
    }
};

export default authMiddleware;

