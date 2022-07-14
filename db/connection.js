const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Whiskers1994!',
        database: 'election'
    },
    console.log("Connected to the election databse. ")
);

module.exports =db;