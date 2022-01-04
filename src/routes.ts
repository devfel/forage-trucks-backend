import express, { response } from 'express';
import ReservationsController from './controllers/ReservationsController';
import VehiclesConroller from './controllers/VehiclesController';

const routes = express.Router();

//CREATE VEHICLE
const vehiclesControllers = new VehiclesConroller();
routes.post('/vehicles', vehiclesControllers.create);

//LIST ALL VEHICLES
//TODO: Front end must let users book only periods that are not already taken for that date.
routes.get('/vehicles', vehiclesControllers.index);



//CREATE RESERVATION
//TODO: Back end must let users book only periods that are not already taken for that date.
const reservationsController = new ReservationsController();
routes.post('/reservations', reservationsController.create);


/* APAGAR
routes.get('/', (request, response) => {
    return response.json({ message: "Hello World" });
}); */

export default routes;