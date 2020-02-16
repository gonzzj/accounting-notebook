const express = require('express');
const router = express.Router();
const accountStore = require('../models/account');
const account = new accountStore();

router.get('/', (req, res) => {
    res.send(account.getTransactions());
});

router.post('/', (req, res) => {
    const statusAccepted = 'accepted';
    const params = {
        type: req.body.type,
        amount: req.body.amount
    };

    account.validateCardType(params);
    const transaction = account.addTransaction(params);

    if (transaction.status !== statusAccepted) {
        return res.status(500).json({"Error": "Transaction declined."});
    }

    res.send(transaction);
});

module.exports = router;