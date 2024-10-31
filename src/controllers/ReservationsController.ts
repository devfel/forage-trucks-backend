// ./src/controllers/ReservationsController.ts

import db from "../database/connection";
import { Request, Response } from "express";

export default class ReservationsController {
  //CREATE RESERVATION
  async create(request: Request, response: Response) {
    const { date, period, staff, vehicle_id } = request.body;

    try {
      await db("reservations").insert({
        date,
        period,
        staff,
        vehicle_id,
      });

      return response.status(201).send();
    } catch (error) {
      //Connection problem with Database or other unexpected issue.
      return response.status(400).json({
        error: "Unexpected Error in the Database.",
      });
    }
  }

  //LIST ALL RESERVATIONS
  async index(request: Request, response: Response) {
    const reservations = await db("reservations").innerJoin("vehicles", "vehicles.id", "=", "reservations.vehicle_id").select("reservations.id", "reservations.date", "reservations.staff", "reservations.period", "reservations.created_at", "reservations.vehicle_id", "vehicles.name", "vehicles.avatar", "vehicles.bio");

    return response.json(reservations);
  }

  //COUNT ALL RESERVATIONS
  async count(request: Request, response: Response) {
    const totalReservations = await db("reservations").count("* as total");

    const { total } = totalReservations[0];
    return response.json(total);
  }

  // DELETE RESERVATION
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleted = await db("reservations").where("id", id).del();

      if (deleted) {
        return response.status(200).json({ message: "Reservation deleted successfully." });
      } else {
        return response.status(404).json({ error: "Reservation not found." });
      }
    } catch (error) {
      return response.status(500).json({
        error: "Unexpected error while deleting the reservation.",
      });
    }
  }
}
