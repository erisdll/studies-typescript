const carMakers = ['ford', 'toyota', 'chevy'];
const carMakersEmpty: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMakeEmpty: string[][] = [];

// Help with inference when extracting valuies
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100)

// Help with 'map'
carMakers.map((car: string) => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-11');
importantDates.push(new Date());
