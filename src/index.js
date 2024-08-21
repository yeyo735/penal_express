import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Asegúrate de tener el archivo db.js en el mismo directorio

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
