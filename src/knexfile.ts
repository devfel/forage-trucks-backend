// ./src/kenxfile.ts

//USING POSTGRES

//PRODUCTION Adaptable.io
// module.exports = {
//     client: 'postgres',

//     connection: process.env.DATABASE_URL,

//     migrations: {
//         directory: __dirname + '/database/migrations'
//     }
// };

module.exports = {
  client: "postgres",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + "/database/migrations",
  },
};
