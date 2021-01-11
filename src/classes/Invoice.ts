import { HasFormatter } from '../interfaces/HasFormatter.js'
export class Invoice implements HasFormatter {
  // readonly will makesure we cannot change the values of the thing before which it is specified
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
