const express = require('express');
var ip = require('ip');

const health = (app) => {
    const router = express.Router();
    app.use('/', router);

    router.get('', (req, resp) => {
        resp.status(200).json({
            status: 'healthy',
            ip: ip.address(),
        })
    });

}

module.exports = health;