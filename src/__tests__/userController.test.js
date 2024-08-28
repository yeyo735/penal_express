// src/__tests__/userController.test.js
import request from 'supertest';
import app from '../app.js'; // Aseg�rate de que este archivo exporte tu aplicaci�n Express
import mongoose from 'mongoose';
import User from '../models/user.js';

let token; // Para almacenar el token despu�s del login

beforeAll(async () => {
    // Conectar a la base de datos de prueba
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    // Limpiar y cerrar la conexi�n de la base de datos despu�s de las pruebas
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('User API', () => {
    let userId; // Para almacenar el ID del usuario despu�s del registro

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
        expect(res.body.msg).toBe('Usuario registrado con �xito');
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
        expect(res.body.message).toBe('Contrase�a actualizada correctamente');
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