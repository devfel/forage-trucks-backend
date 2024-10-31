// ./src/database/connection.ts

import knex from "knex";

//USING POSTGRES
const db = knex({
  client: "postgres",

  //PRODUCTION Connection
  connection: process.env.DATABASE_URL,
});

export default db;
