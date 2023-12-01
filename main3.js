//Variable para almacenar valor mostrado:

let displayValue = "";

//Función para agregar valores / visualizarlos

function appendToDisplay(value){
    displayValue += value; //displayValue = displayValue + value, Asignar el valor presionado existente
    document.getElementById("display").value=displayValue; //Actualizar mi campo de input


}

//Función para limpiar C

function clearDisplay(){
    displayValue = ''; //Vale vacío, cadena vacía
    document.getElementById("display").value=displayValue;
}

//Función para realizar los cálculos 

function calculate(){
    try{
        const result = eval(displayValue); //Evaluar nuestra expresión 
        document.getElementById("display").value=result; //Mostrar el resultado
        displayValue = result.toString();
    } catch(error){
        document.getElementById("display").value="Error";
    }
}

//Evaluar la expresión

//Mostrar el resultado
//Actualizarlo
//Try catch