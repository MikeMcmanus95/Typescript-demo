async function helloWorld() {
    console.log('Hello world');
}
// Number
let lucky;
lucky = 23;
let myNum = 23;
// Any
let myString = 'Hey!';
myString = 23;
let message;
message = 'abc';
message.endsWith('c');
// Explicit Type Assertion
let endsWithC = message.endsWith('c');
let alternativeWay = message.endsWith('c');
let thing = 'something';
let font = 'bold';
const person = {
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
function tsPower(x, y) {
    console.log(String(Math.pow(x, y)));
}
function tsSomething(a, b) {
    if (a === 'Mike')
        return true;
    return 'nope';
}
tsSomething('mike', 'b');
tsPower(2, 2);
// Arrays
const arr = [];
arr.push(1);
// arr.push('hey');
const peopleArr = [];
peopleArr.push(person);
const newArr = [];
newArr.push('2');
newArr.push(2);
newArr.push(false);
newArr.push(false);
newArr.push(true);
// Generics
class Observable {
    constructor(value) { }
}
let x;
let Y;
let z = new Observable(23);
