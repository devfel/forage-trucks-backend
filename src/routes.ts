import express, { response } from 'express';
import ReservationsController from './controllers/ReservationsController';
import VehiclesConroller from './controllers/VehiclesController';

const routes = express.Router();

//CREATE VEHICLE
const vehiclesControllers = new VehiclesConroller();
routes.post('/vehicles', vehiclesControllers.create);

//CREATE RESERVATION
const reservationsController = new ReservationsController();
routes.post('/reservations', reservationsController.create);

/* APAGAR
routes.get('/', (request, response) => {
    return response.json({ message: "Hello World" });
}); */

export default routes;