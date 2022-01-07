import path from 'path';

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
    client: 'postgres',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'docker',
        database: 'forage_trucks_postgresdb'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};