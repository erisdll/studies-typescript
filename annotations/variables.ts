let apples: number = 5;
let speed: string = 'fast';

let notthingMusch: null = null;
let nothing: undefined = undefined;

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use  annotations
// 1) Function thata returns the 'any' type

const json = '{ "x": 10, "y": 20 }';
const coodinates: { x: number; y: number } = JSON.parse(json);
console.log(coodinates); // {x: 10, y: 20}

// 2) When we declare a variable in one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannor ve infered correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
