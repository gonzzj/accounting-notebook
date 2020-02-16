const express = require('express');
const app = express();
const cors = require('cors');
const transactions = require('./routers/transactions');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/transactions', transactions);

module.exports = app;