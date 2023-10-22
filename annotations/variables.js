var apples = 5;
var speed = 'fast';
var notthingMusch = null;
var nothing = undefined;
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function 
var logNumber = function (i) {
    console.log(i);
};
// When to use  annotations
// 1) Function thata returns the 'any' type
var json = '{ "x": 10, "y": 20 }';
var coodinates = JSON.parse(json);
console.log(coodinates); // {x: 10, y: 20}
// 2) When we declare a variable in one line
// and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3) Variable whose type cannor ve infered correctly
var numbers = [-10, -1, 12];
var numbersAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}
