const express = require('express');
const getUsers = require('../controllers/getUsers');
var ip = require('ip');

const health = (app) => {
    const router = express.Router();
    app.use('/users', router);
    router.get('/getusers', async (req, resp) => {
        const data = await getUsers();
        resp.status(200).json({
            status: 'users',
            ip: ip.address(),
            data
        })
    });

}

module.exports = health;