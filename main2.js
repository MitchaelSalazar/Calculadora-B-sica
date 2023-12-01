// 1) Funciones matemáticas: suma, resta, división y multiplicación
// 2) Saludo personalizado: "Hola, ella es Ana y vive en México y se dedica a/estudia"
// 3) Función que calcule el área de un triángulo
// 4) Función para verificar si un número es primo

//Cada ejercicio debe tener 2 resultados mínimo

//EJERCICIO 1
function Suma(num1, num2){
    let total = num1 + num2;
    return total;
}

console.log(Suma(1,2));
console.log(Suma(3,6));

function Resta(num1, num2){
    let total = num1 - num2;
    return total;
}

console.log(Resta(1,2));
console.log(Resta(3,6));


function Division(num1, num2){
    let total = num1 / num2;
    return total;
}

console.log(Division(1,2));
console.log(Division(3,6));

function Multiplicación(num1, num2){
    let total = num1 * num2;
    return total;
}

console.log(Multiplicación(1,2));
console.log(Multiplicación(3,6));

//EJERCICIO 2

function saludo(){

    let nombre = prompt("¿Cuál es tu nombre?");
    let pais = prompt("¿De qué país eres?");
    let oficio = prompt("¿A qué te dedicas?");

    return "Hola, ella es "+ nombre + " vive en " + pais + " se dedica a " + oficio;
}

saludo()

//EJERCICIO 3 

function AreaTriangulo(base,altura){
    let area = (base * altura )/ 2;
    return area;
}

console.log(AreaTriangulo(3,2));
console.log(AreaTriangulo(90,5));

//EJERCICIO 4
/*
function numeroPrimo(numero){

    let numero = prompt("Escoge un número");
    if(){

    }

}
*/

