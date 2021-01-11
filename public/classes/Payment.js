export class Payment {
    // readonly will makesure we cannot change the values of the thing before which it is specified
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes ${this.amount} for ${this.details}`;
    }
}
