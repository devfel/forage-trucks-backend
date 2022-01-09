//import path from 'path';

// //USING SQLITE3
// module.exports = {
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
//     },
//     migrations: {
//         directory: path.resolve(__dirname, 'src', 'database', 'migrations')
//     },
//     useNullAsDefault: true,
// };

//USING POSTGRES
module.exports = {
    client: 'pg',

    //PRODUCTION
    connection: process.env.DATABASE_URL,

    // //DEV
    // connection: {
    //     host: 'localhost',
    //     port: 5432,
    //     user: 'postgres',
    //     password: 'docker',
    //     database: 'forage_trucks_postgresdb'
    // },

    // migrations: {
    //     directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    // }

    migrations: {
        directory: __dirname + '/src/database/migrations'
    }
};