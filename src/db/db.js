const mysql = require('mysql');

class db {
    constructor() {
        this.connect();
    }

    connect() {
        const connection = mysql.createConnection({
            host: 'https://database-1.cnwt5f9pbnof.us-east-1.rds.amazonaws.com/',
            user: 'admin',
            password: 'Nicol@s86',
            //database: 'sys',
            //insecureAuth: true
        });
        connection.connect(error => {
            if (error) throw error;
            console.log("Successfully connected to the database.");
        });
    };
};

module.exports = db;