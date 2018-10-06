let wzrostMarka = 190;

let wzrostAnny = 165;

/*warunek if*/

if (wzrostAnny < wzrostMarka) {
    console.log('Anna jest nizsza od Marka');
}
let bmi = 28;
if (bmi > 25) {
    console.log("nadwaga");
} else if (bmi > 18) {
    console.log("norma");
} else {
    console.log("niedowaga");
}

//switch
let lightColor = 'yellow';

switch (lightColor) {
    case 'green':
        console.log('GO');
        break;
    case 'red':
        console.log('STOP');
        break;
    case 'yellow':
        console.log('WAIT');
        break;
        default :
        console.log('LIGHTS BROKEN');

}
