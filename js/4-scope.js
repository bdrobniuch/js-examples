'use strict';

/*unikamy deklarowania zmiennych globalnych
pamietamy ze zmienna zadeklarowana ma zasieg tylko wewnarz kontekstu w ktoreym jest zadeklarowana*/

function add(num1, num2)
{
    let result = num1 + num2;
    
}

add(2,2);
//console.log(result);

let product;

function multiply(num1, num2){
    product = num1 * num2;
}
multiply(3,3);
console.log(product)