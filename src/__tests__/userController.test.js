// src/__tests__/userController.test.js
import request from 'supertest';
import app from '../app.js'; // Asegúrate de que este archivo exporte tu aplicación Express
import mongoose from 'mongoose';
import User from '../models/user.js';

let token; // Para almacenar el token después del login

beforeAll(async () => {
    // Conectar a la base de datos de prueba
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    // Limpiar y cerrar la conexión de la base de datos después de las pruebas
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('User API', () => {
    let userId; // Para almacenar el ID del usuario después del registro

    test('should register a user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                password: 'password123',
                type: 'admin',
                user: 'testadmin'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.msg).toBe('Usuario registrado con éxito');
    });

    test('should login a user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                username: 'testuser',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token; // Guardar el token para futuras solicitudes
    });

    test('should get user by ID', async () => {
        // Obtener el usuario por ID utilizando el token
        const res = await request(app)
            .get(`/api/users/${userId}`)
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', 'testuser');
    });

    test('should update a user', async () => {
        const res = await request(app)
            .put(`/api/users/${userId}`)
            .set('x-auth-token', token)
            .send({
                username: 'updateduser',
                type: 'user'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', 'updateduser');
    });

    test('should change password', async () => {
        const res = await request(app)
            .put(`/api/users/password/${userId}`)
            .set('x-auth-token', token)
            .send({
                newPassword: 'newpassword123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Contraseña actualizada correctamente');
    });

    test('should delete a user', async () => {
        const res = await request(app)
            .delete(`/api/users/${userId}`)
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Usuario eliminado correctamente');
    });

    test('should list all users', async () => {
        const res = await request(app)
            .get('/api/users')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});