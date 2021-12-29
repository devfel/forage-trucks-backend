import express from 'express';
import db from './database/connection';

const routes = express.Router();


routes.post('/vehicles', async (request, response) => {

    const {
        name,
        avatar,
        bio
    } = request.body;

    await db('vehicles').insert({
        name,
        avatar,
        bio
    });

    return response.send();
});

// APAGAR
routes.get('/', (request, response) => {
    return response.json({ message: "Hello World" });
});

export default routes;