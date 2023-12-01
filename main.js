//Funciones

function Suma(num1, num2){  //Palabra reservada function
    //Bloque de instrucciones
    let total = num1 + num2;
    return "El total es " + total;
}

console.log(Suma(2,3));

//Otra forma

function Suma2(num1, num2){  //Palabra reservada function
    //Bloque de instrucciones
    let total = num1 + num2;
    console.log("El total es " + total);
}

Suma2(2,38);

//Es posible llamar la misma función varias veces con diferentes valores

function saludo(nombre){
    console.log("Bienvenido/a a esta clase " + nombre);
}

saludo("Miguel");
saludo("José");
saludo("Karina");

//FUNCIONES ANIDADAS

function ObtenerMarcador(){
    let partido1 = 3;
    let partido2 = 3;
}

//FUNCIONES PURAS
function sumaUnoAlNumero(numero){
    return numero + 1;
}

//FUNCIÓN IMPURA 

