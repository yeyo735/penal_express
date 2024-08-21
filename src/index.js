import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db';

config();
connectDB();

const app = express();

app.use(json());

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
