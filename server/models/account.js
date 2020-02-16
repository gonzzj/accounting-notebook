const uuid = require('uuid/v4');
const Status = require('./status');
const Type = require('./type');

class Account {
    constructor() {
        this.transactions = [];
        this.totalBalance = 0;
    }

    addTransaction(params) {
        const { type, amount } = params;

        const transaction = {
            id: uuid(),
            type,
            amount,
            status: this.validateStatus(params) ? Status.accepted : Status.rejected
        };

        if (transaction.status === Status.accepted) {
            this.updateBalance(transaction);
        }

        this.transactions.push(transaction);

        return transaction;
    }

    getTransactions() {
        return this.transactions;
    }

    updateBalance(amount) {
        this.balance -= amount;
    }

    validateStatus(params) {
        const { type, amount } = params;

        if (type === Type.debit) {
            return this.balance - amount >= 0;
        }

        return true;
    }

    validateCardType(params) {
        const { type } = params;
        const typesAvailable = [Type.credit, Type.debit];

        if (!typesAvailable.includes(type)) {
            throw new Error('Error! Transaction type is not available');
        }

        return true;
    }
}

module.exports = Account;