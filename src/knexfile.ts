//USING POSTGRES
module.exports = {
    client: 'postgres',

    //PRODUCTION
    connection: process.env.DATABASE_URL,

    migrations: {
        directory: __dirname + '/database/migrations'
    }
};