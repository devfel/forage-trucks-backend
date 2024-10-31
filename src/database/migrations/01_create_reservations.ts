// ./src/database/migrations/01_create_reservations.ts
import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("reservations", (table) => {
    table.increments("id").primary();
    table.bigInteger("date").notNullable(); //Date of the reservation.
    table.string("period").notNullable(); //Periods are Morning, Afternoon, Night.
    table.string("staff").notNullable(); //Name of the user doing the reservation.

    //Vehicle
    table.integer("vehicle_id").notNullable().references("id").inTable("vehicles").onUpdate("CASCADE");

    //Log
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP")).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("reservations");
}
