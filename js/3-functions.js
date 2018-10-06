//deklaracja funkcji
function print() {
    console.log('siema');
}

print();

let sayName = function () {
    console.log('Łukasz');
}

sayName();

//Funkcja z parametrami
function add(num1, num2) {
    console.log(num1 + num2);
}

add(3, 4);

//zwracanie danych
function multiply(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;

}

let r = multiply(5, 6);
console.log(r);

//funkcja strzalkowa

const printUser = () => {
    return 'bdrobniuch';
}

console.log(printUser());

const avg = (num1, num2) => {
    return (num1 + num2) / 2;
}

console.log(avg(4, 2));

const avg2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avg2([4, 2, 3]));

const cube = a => a*a*a;

console.log(cube(3));


/*napisz funkcje ktora wypisze w konsoli imie i nazwisko uzytkownika przekazane jako parametry*/

const printUser2 = (name, surname) => console.log(name + " " + surname);

printUser2("Blazej", "Drobniuch");