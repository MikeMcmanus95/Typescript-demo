async function helloWorld() {
  console.log('Hello world');
}

// Number
let lucky: number;
lucky = 23;

let myNum = 23;

// Any
let myString: any = 'Hey!';
myString = 23;

let message;
message = 'abc';
message.endsWith('c');

// Explicit Type Assertion
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// Custom
type Style = string;
let thing: Style = 'something';

type FontWeight = 'bold' | 'italic' | 'underline';

let font: FontWeight = 'bold';

// Interfaces
interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: 'Usain',
  last: 'Bolt',
  fast: true,
  age: 23,
};

// Function typing
// void - function returns nothing
function power(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Please pass in a number. Thanks.';
  }
  return Math.pow(x, y);
}

power(2, 4);
power('2', 'hey');

function tsPower(x: number, y: number): void {
  console.log(String(Math.pow(x, y)));
}

function tsSomething(a: string, b: string): any {
  if (a === 'Mike') return true;
  return 'nope';
}

tsSomething('mike', 'b');

tsPower(2, 2);

// Arrays

const arr: number[] = [];
arr.push(1);
// arr.push('hey');

const peopleArr: Person[] = [];
peopleArr.push(person);

// Tuples

type MyTuple = [number?, string?, boolean?];

const newArr: MyTuple = [];
newArr.push('2');
newArr.push(2);
newArr.push(false);
newArr.push(false);
newArr.push(true);

// Generics
class Observable<T> {
  constructor(value: T) {}
}

let x: Observable<number>;
let Y: Observable<string>;

let z = new Observable(23);
