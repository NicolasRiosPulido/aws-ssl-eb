const mysql = require('mysql');

class db {
    constructor() {
        this.connection,
            this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: 'database-1.cnwt5f9pbnof.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Nicolas86',
            database: 'sys',
        });
        this.connection.connect(error => {
            if (error) throw error;
            console.log("Successfully connected to the database.");
        });
    };

    runQuery(query) {
        return new Promise(async (resolve, reject) => {
            this.connection.query(query, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res);
                }
            })
        })
    };

    end() {
        console.log('termino coneccion')
        this.connection.end();
    };
};

module.exports = db;