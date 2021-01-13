import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
// interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "meadssasad",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number) {
    console.log(`spent ${amount}`);
    return amount;
  },
};
const greetPerson = (person: isPerson) => {
  console.log(`hello ${person.name}`);
};
greetPerson(me);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number ]
  values = [tofrom.value, details.value, amount.valueAsNumber]
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc,type.value,'end')
});
