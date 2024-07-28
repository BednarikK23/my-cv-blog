require('dotenv').config();

let config = {
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_NAME,
        multipleStatements: true
    }
}

module.exports = require('knex')(config);
