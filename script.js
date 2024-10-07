/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

let country = "United States of America";
let continent = "North America";
let population = "333 million";

console.log(country);
console.log(continent);
console.log(population);*/

/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);*/

//let age = 30;

//age = 31;

/*const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;*/

/*console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;*/

/*const now = 2037;
const ageSarah = now - 2018;
const ageJonas = now - 1991;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
/*const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;*/

//const BMIconst = mass /(height * height)
//

/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
	"I'm " +
	firstName +
	", a  " +
	(year - birthYear) +
	" years old " +
	job +
	"!";

const jonasNew = `Im ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);
console.log(`Just a regular string ....`);
console.log("String with a \n multiple \n lines");

console.log(`
	string
	multiple
	lines`);*/
/*const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log("Sarah can start driving license 🚗");
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}
*/
// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
// 	console.log(
// 		`Mark's BMI (${BMIMark})is higher than John's BMI (${BMIJohn})`
// 	);
// } else {
// 	console.log(
// 		`John's BMI (${BMIJohn})is higher than Mark's BMI (${BMIMark})`
// 	);
// }
//tupe conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

// console.log(Number("Jonas"));
// console.log(typeofNan);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + "years old");
//this has converted the 23 number to a string, you could also do '23' but you don't have to in JS

//not all operators convert to string
console.log("23" - "10" - "3");
console.log("23" * "2");
