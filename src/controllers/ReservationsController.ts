import db from '../database/connection';
import { Request, Response } from 'express'

export default class ReservationsController {
    //CREATE RESERVATION
    async create(request: Request, response: Response) {
        const {
            date,
            period,
            staff,
            vehicle_id
        } = request.body;

        try {
            //Search Car/Date Reservation
            /*const searchReservation = await db('vehicles')
                .whereExists(function () {
                    this.select('reservations.*')
                        .from('reservations')
                        .whereRaw('reservations.vehicle_id = ?? and reservations.date = ??', [vehicle_id, date])
                })
            */
            //Search Car/Date Reservation - Other Way of Doing the Search.
            // const searchReservation = await db('reservations')
            //     .where('vehicle_id', vehicle_id)
            //     .where('date', date);

            //If the car is NOT already reserved for that date.    
            //if (!searchReservation[0]) {
            await db('reservations').insert({
                date,
                period,
                staff,
                vehicle_id
            });


            return response.status(201).send();
            //}
            // //If the car is NOT already reserved for that date.    
            // else {
            //     return response.status(400).json({
            //         error: "This vehicle was just reserved by someone else."
            //     })
            // }
        }
        //Connection problem with Database or other unexpected issue.
        catch (error) {
            return response.status(400).json({
                error: "Unexpected Error in the Database."
            })
        }
    }

    //LIST ALL RESERVATIONS
    async index(request: Request, response: Response) {
        const reservations = await db('reservations')
            .innerJoin('vehicles', 'vehicles.id', '=', 'reservations.vehicle_id')
            .select('reservations.id', 'reservations.date', 'reservations.staff', 'reservations.period', 'reservations.created_at', 'reservations.vehicle_id', 'vehicles.name', 'vehicles.avatar', 'vehicles.bio')

        return response.json(reservations);
    }

    //COUNT ALL RESERVATIONS
    async count(request: Request, response: Response) {
        const totalReservations = await db('reservations')
            .count('* as total');

        const { total } = totalReservations[0];
        return response.json(total);
    }
}