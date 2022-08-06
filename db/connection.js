const mysql = require('mysql2');

const  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',

password: '1qaz',
database: 'tracker'
})

module.exports = db; 