import db from '../database/connection';
import { Request, Response } from 'express'

function testTruthyFalsy(val: any) {
    return val ? console.log('truthy') : console.log('falsy');
}

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
            const searchReservation = await db('vehicles')
                .whereExists(function () {
                    this.select('reservations.*')
                        .from('reservations')
                        .whereRaw('reservations.vehicle_id = ?? and reservations.date = ??', [vehicle_id, date])
                })

            console.log("VEHICLE RESERVED FOR DATE: " + searchReservation);
            console.log(testTruthyFalsy(searchReservation));
            if (!searchReservation) {

                await db('reservations').insert({
                    date,
                    period,
                    staff,
                    vehicle_id
                });

                return response.status(201).send();
            }
            else {
                return response.status(400).json({
                    error: "This vehicle was just reserved by someone else."
                })
            }
        } catch (error) {
            return response.status(400).json({
                error: "Unexpected Error in the Database."
            })
        }
    }

    //LIST ALL RESERVATIONS
    async index(request: Request, response: Response) {
        const reservations = await db('reservations')
            .innerJoin('vehicles', 'vehicles.id', '=', 'reservations.vehicle_id')
            .select('reservations.id', 'reservations.date', 'reservations.staff', 'reservations.created_at', 'reservations.vehicle_id', 'vehicles.name', 'vehicles.avatar', 'vehicles.bio')

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