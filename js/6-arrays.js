/*wrzoenie tabliy*/

let names = ['pawel','Marek', 'Anna'];
console.log(names);
//names.length =5;
console.log(names);
console.log(`Nasze imie to ${names[0]}`)
names[3] = "Zbyszek";
console.log(names);
names.push("Krzychu");
console.log(names);
console.log(names.pop());
console.log(names);

//map filter, 


const testArray = (...args) => {
    console.log(args);
};

testArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
testArray([1,2,3,4]);
///fsdfsd
names.unshift("kasia","zuzuia");
console.log(names);

console.log(names.reverse());
console.log(names.join(" "));
