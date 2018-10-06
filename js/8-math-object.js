let pi = Math.PI;
console.log(pi);
let squereArea = Math.pow(4,2);
console.log(squereArea);

/*napisz funkcje ktora zwroci pole kola o promieniu r*/

let poleKola = r => Math.PI*Math.pow(r,2);

console.log(poleKola(2));

function circleArea(r) {
    return Math.PI*Math.pow(r,2);
}

/*Losowe liczby*/
let random = Math.random();
console.log(Math.floor(Math.random() * 10));