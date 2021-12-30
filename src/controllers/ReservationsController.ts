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
            await db('reservations').insert({
                date,
                period,
                staff,
                vehicle_id
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                error: "Unexpected Error in the Database"
            })
        }
    }
}