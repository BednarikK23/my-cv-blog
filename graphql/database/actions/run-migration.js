const knex = require('../mysql');
const promise = require('bluebird');
const path = require('knex');
const fs = require('fs');

const db = knex.client.config.connection.database || null

function replaceAll (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

fs.readdir(
    path.resolve(__dirname, '../migrations'),
    "utf-8",
    (err, files) => {
        if (err) {
            throw new Error(err);
        }
        return promise.each(files, (file) => {
            return new Promise((resolve, reject) => {
                fs.readFile(
                    path.resolve(__dirname, '../migrations', file),
                    'utf-8',
                    (err, data) => {
                        if (err) {
                            return reject(err);
                        }
                        return knex.raw(replaceAll(data, '{}', db))
                            .then(resolve);
                    }
                );
            });
        }).then(() => {
            console.log('Migrations have run successfully');
        })
        .catch(err =>  {
            throw new Error(err);
        })
    }
)
