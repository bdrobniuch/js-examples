let names = ['pawel', 'Marek', 'Anna'];

//for

//for (let i = 0; i < names.length; ++i) {
//    console.log(i);
//    console.log(names[i]);
//}

//names.forEach(function (element) {
//    console.log(element)
//});


names.forEach((element) => console.log(element));

let car = {
    name: "Volvo",
    color: "czerwony",
    waga: 2300
}

for (let key in car) {
    console.log(car[key]);
}

let randomNumber = Math.floor( Math.random() * 10);

while (randomNumber != 5) {
    console.log(randomNumber);
    randomNumber = Math.floor( Math.random() * 10);
}

//Przerywanie dzialania funkcji
let chaos = [1,12, 'Cześć', null, 60, 'Done', 15,30];
for (let i=0; i<chaos.length; i++)
    {
        console.log(chaos[i]);
        if (chaos[i]=='Done') {break;};
        
    }
