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

module.exports = {
  client: "postgres",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + "/database/migrations",
  },
};
