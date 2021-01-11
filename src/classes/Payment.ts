import { HasFormatter } from '../interfaces/HasFormatter.js'
export class Payment implements HasFormatter {
  // readonly will makesure we cannot change the values of the thing before which it is specified
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} owes ${this.amount} for ${this.details}`;
  }
}
