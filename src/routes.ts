import express, { response } from 'express';
import ReservationsController from './controllers/ReservationsController';
import VehiclesConroller from './controllers/VehiclesController';

const routes = express.Router();

// ===== VEHICLES =====
//CREATE 
const vehiclesControllers = new VehiclesConroller();
routes.post('/vehicles', vehiclesControllers.create);
//LIST AVAILABLE VEHICLES
//TODO: Front end must let users book only periods that are not already taken for that date.
routes.get('/vehicles', vehiclesControllers.index);

// ===== RESERVATION =====
//CREATE 
//TODO: Back end must let users book only periods that are not already taken for that date.
const reservationsController = new ReservationsController();
routes.post('/reservations', reservationsController.create);
//LIST ALL RESERVATIONS
routes.get('/reservations', reservationsController.index);

export default routes;