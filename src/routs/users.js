const express = require('express');
const getUsers = require('../controllers/getUsers');

const health = (app) => {
    const router = express.Router();
    app.use('/users', router);
    router.get('/getusers', (req, resp) => {
        getUsers()
        resp.status(200).json({
            status: 'users',
        })
    });

}

module.exports = health;