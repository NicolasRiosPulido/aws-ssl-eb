const db = require('../db/db');

const getUsers = async () => {
    try {
        const dbInstance = new db();
        const query = 'SELECT * FROM users';
        const data = await dbInstance.runQuery(query);
        dbInstance.end();
        return data;
    } catch (e) {
        console.log('errorrrrrrrrr')
        throw e
    }
}

module.exports = getUsers;