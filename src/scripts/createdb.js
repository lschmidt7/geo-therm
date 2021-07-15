const mysql = require('mysql2/promise');
const fs = require('fs');

mysql.createConnection({
    user     : 'root',
    password : 'geo-therm1402',
    multipleStatements: true
}).then(connection => {
    const sql = fs.readFileSync('./database/cities.sql').toString();
    connection.query(sql).then(() => {
        console.log("Banco criado com sucesso")
        process.exit(0)
    })
})