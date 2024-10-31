// ./src/kenxfile.ts

//USING POSTGRES

//PRODUCTION
// module.exports = {
//     client: 'postgres',

//     //PRODUCTION
//     connection: process.env.DATABASE_URL,

//     migrations: {
//         directory: __dirname + '/database/migrations'
//     }
// };

// //DEVELOPMENT
// module.exports = {
//   client: "postgres",
//   connection: {
//     host: "localhost",
//     port: 5432,
//     user: "postgres",
//     password: "docker", // replace with the actual password
//     database: "forage_trucks_postgresdb",
//   },
//   migrations: {
//     directory: __dirname + "/database/migrations",
//   },
// };

module.exports = {
  client: "postgres",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + "/database/migrations",
  },
};
