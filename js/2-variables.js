//deklaracja zmiennych
//let ES6 roznia sie zasiegiem
//var ES5
let number;
var name;

console.log(number, name);

number = 10;
name = 'Błażej';


console.log(number, name);


let age = 36;

console.log(age);
//redefinicja zmiennej
//var c let nie hoisting
number = 25;
name = 'Adam';

console.log(number, name);

//stale
const numberOfMonths = 12;
console.log (numberOfMonths);
//numberOfMonths = 13;