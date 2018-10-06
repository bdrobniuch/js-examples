let car = {
    name: "Volvo",
    color: 'czerwone',
    fuelConsumption: 9.5,
    carEqupiment: ['ABS', 'TCS'],
    startEngine() {
        console.log(`Wrum ${this.name}`);
    }
};

console.log(car);
console.log(car.fuelConsumption);
console.log(car.carEqupiment[0]);

car.startEngine();
car.price = 120000;
console.log(car);


//KLASY 

class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    printInfo() {
        console.log(this.name + ' ma ' + this.height + ' cm wzrostu');
    }

}
console.log(Person);

//object to instancja klasy
let lukasz = new Person("Lukasz", 135);
console.log(lukasz);
console.log(new Person("Adam", 175));
(new Person("Ewa", 165)).printInfo();

console.log(lukasz);
lukasz = new Person("Ewa", 165);
console.log(lukasz);
