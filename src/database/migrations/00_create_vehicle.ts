// ./src/database/migrations/00_create_vehicle.ts
import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("vehicles", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("bio").notNullable(); //Bio is Color, Tag, Year and other info.
    //For future a new boolean field that shows if the vehicle is available on not for deleting porpuses.
    console.log("Migrations: Vehicle Table Created.");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("vehicles");
}
