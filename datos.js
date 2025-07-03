// Importamos la función fs de node
const fs = require("fs");

// Leeemos el archivo JSON y lo almacenamos
const archivo = fs.readFileSync("./datos.json");

// Parseamos el archivo JSON para convertirlo en algo que JavaScript pueda manejar
const personas = JSON.parse(archivo.toString());

// Definimos las funciones "getOlderThan" y "getAll"
const getOlderThan = (arrayPersonas, edad) => arrayPersonas.filter((persona) => persona["edad"] > edad);

const getAll = (arrayPersonas) => arrayPersonas.map((persona) => persona["nombre"]);

// Generamos una función de testing
function testear() {
    // Datos de prueba
    const arrayPrueba = [
        {"nombre" : "Pablo", "edad" : 26},
        {"nombre" : "Luisa", "edad" : 23}
    ]

    // Resultados esperados
    const expectedNames = JSON.stringify(["Pablo", "Luisa"]);
    const expectedOlderArray = JSON.stringify(
        [
            {"nombre" : "Pablo", "edad" : 26}
        ]
    );

    // Testing getOlderThan
    JSON.stringify(getOlderThan(arrayPrueba, 25)) === expectedOlderArray ? console.log("La función \"getOlderThan\" trabaja correctamente!") : console.error("La función \"getOlderThan\" tiene un error, favor de revisar!");

    // Testing getAll
    JSON.stringify(getAll(arrayPrueba)) === expectedNames ? console.log("La función \"getAll\" trabaja correctamente!") : console.error("La función \"getAll\" tiene un error, favor de revisar!");

}

// Usamos el TDD para ver si alguna de nuestras funciones contiene errores
testear();

// Ponemos a prueba nuestro función
const arrayDePersonas = personas["personas"]; //Usamos esta variable para extraer el array y llamarlo en las funciones de forma mas simple

const mayoresA20 = getOlderThan(arrayDePersonas, 20);
const mayoresA25 = getOlderThan(arrayDePersonas, 25);
const mayoresA30 = getOlderThan(arrayDePersonas, 30);
const nombresPersonas = getAll(arrayDePersonas);

// Imprimimos en pantalla para ver resultados
console.log("Personas mayores a 20 años: ");
console.log(mayoresA20);
console.log("Personas mayores a 25 años: ");
console.log(mayoresA25);
console.log("Personas mayores a 30 años: ");
console.log(mayoresA30);
console.log("Nombres del array: ");
console.log(nombresPersonas);