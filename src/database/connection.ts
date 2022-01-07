import knex from "knex";
import path from 'path';

// //USING SQLITE3
// const db = knex({
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'database.sqlite')
//     },
//     useNullAsDefault: true,
// });

//USING POSTGRES
const db = knex({
    client: 'postgres',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'docker',
        database: 'forage_trucks_postgresdb'
    }
});


export default db;