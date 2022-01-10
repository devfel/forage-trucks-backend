import knex from "knex";

//USING POSTGRES
const db = knex({
    client: 'postgres',

    //PRODUCTION
    connection: process.env.DATABASE_URL
});


export default db;