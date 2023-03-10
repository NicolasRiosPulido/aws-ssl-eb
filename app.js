var port = process.env.PORT || 3000;
var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.json());

const health = require('./src/routs/health');
const users = require('./src/routs/users');

app.use(cors());

health(app);
users(app);

app.listen(port, () => { console.log(`Listen http://localhost:${port}`) });
module.exports = app;

