const knex = require('../mysql');

knex.raw('show scemas').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

