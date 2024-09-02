/* Intentos
let numPI=π;
let numRADIO=20;
let resultado=numPI * numRADIO;
console.log("el área del círculo es" + resultado)*/

/*function radiosquare(numero){
    let cuadrado=numero*numero;
    console.log("el cuadrado de " + numero  + " es " + cuadrado);

}

radiosquare(5);
radiosquare(6);
radiosquare(20);
*/

function AreaCirculo(radio){
    let area = Math.PI * radio * radio;
    console.log("El área de un círculo de radio " + radio + " es " + area)
}

AreaCirculo(20)
AreaCirculo(6)
AreaCirculo(117)