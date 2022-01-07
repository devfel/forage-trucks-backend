import db from '../database/connection';
import { Request, Response } from 'express'

export default class VehiclesConroller {
    //CREATE VEHICLE
    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            bio
        } = request.body;

        try {
            await db('vehicles').insert({
                name,
                avatar,
                bio
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                error: "Unexpected Error in the Database"
            })
        }
    }


    //LIST AVAILABLE VEHICLES FOR A SPECIFIC DATE
    async index(request: Request, response: Response) {
        const filters = request.query;

        if (!filters.date) {
            return response.status(400).json({
                error: "Missing date parameters to search car availability."
            });
        }

        //Join Solution
        // const vehicles = await db('vehicles')
        // .where(DATE = DATE)
        // .join('reservations', 'vehicles.id', '=', 'reservations.vehicle_id')
        // .MOSTRAR APENAS PERIOD;

        // //USING SQLITE3
        // const availableVehicles = await db('vehicles')
        //     .whereNotExists(function () {
        //         this.select('reservations.*')
        //             .from('reservations')
        //             .whereRaw('`reservations`.`vehicle_id` = `vehicles`.`id` and `reservations`.`date` = ??', [Number(filters.date)])
        //     })

        //USING POSTGRES
        const availableVehicles = await db('vehicles')
            .whereNotExists(function () {
                this.select('reservations.*')
                    .from('reservations')
                    .whereRaw('reservations.vehicle_id = vehicles.id and reservations.date = ??', [Number(filters.date)])
            })



        return response.json(availableVehicles);
    }
}