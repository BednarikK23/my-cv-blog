const fs = require('fs');
const path = require('path');

let tableName

try {
    tableName = process.argv.find(
        (arg) => arg.includes('--tableName=')
    ).split('=')[1];
} catch (err ) {
    console.log('Please provide a table name');
    process.exit(1);
}

const fileName = `${Date.now()}-${tableName}.sql`;

fs.writeFile(
    path.resolve(__dirname, '../migrations', fileName), '', (err) => {
        if (err) {
            throw new Error(err);
        }
        console.log(`Migration ${fileName} created`);
    }
)
