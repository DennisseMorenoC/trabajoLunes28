const number1 = prompt ("Ingrese el primer número para sumar");
const number2 = prompt ("Ingrese el segundo número para sumar");

const add = parseInt(number1) + parseInt(number2);
alert ("Su suma es de: " + add);

const number3 = prompt ("Ingrese un número para realizar la multiplicación");
const multiply = parseInt(number3) * add;
alert ("El resultado de su ejercicio " + number3 + "*(" + number1 + "+" + number2 + ") = " + multiply);
