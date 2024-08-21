import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
    const { username, password, type, user } = req.body;

    try {
        let existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
            state: 'active',
            type,
            user,
        });

        await newUser.save();

        res.status(201).json({ msg: 'Usuario registrado con éxito' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};
