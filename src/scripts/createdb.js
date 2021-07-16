const mysql = require('mysql2/promise');
const fs = require('fs');

require('dotenv').config()

mysql.createConnection({
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    multipleStatements: true
}).then(connection => {
    const sql = fs.readFileSync('./database/cities.sql').toString();
    connection.query(sql).then(() => {
        console.log("Banco criado com sucesso")
        process.exit(0)
    })
})