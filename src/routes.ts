import express from 'express';
import db from './database/connection';

const routes = express.Router();

//CREATE VEHICLE
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

//CREATE RESERVATION
routes.post('/reservations', async (request, response) => {

    const {
        date,
        period,
        staff,
        vehicle_id
    } = request.body;

    await db('reservations').insert({
        date,
        period,
        staff,
        vehicle_id
    });

    return response.send();
});


/* APAGAR
routes.get('/', (request, response) => {
    return response.json({ message: "Hello World" });
}); */

export default routes;