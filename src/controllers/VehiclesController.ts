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
}