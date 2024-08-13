"use strict";
let saludo = "saludo";
let nombre = "Martin";
let edad = 25;
let esMayor = true;
let colores = ["rojo", "verde", "azul"];
let colores2 = ["rojo", "verde", "azul"];
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
let hoy = DiasSemana.Lunes;
//funciones con tipos y parametros de retorno:
function saludar(nombre) {
    return `Hola ${nombre}`; // retorno que es string
}
console.log(saludar('Pablo'));
function saludar2(nombre) {
    console.log(`Hola saludo2 ${nombre}`);
}
saludar2("Martin");
// clases con propiedades y metodos tipeados:
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    } //public significa que se crea la propiedad y se asigna el valor en el constructor y se puede acceder desde fuera de la clase
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre} Precio: ${this.precio}`);
    }
}
//let colores:Color = "amarillo"; // da error porque no es un color valido en Color
let colors = "rojo"; // es correcto
// uso de tipos genericos
function duplicar(valor) {
    return valor;
}
const numeroDuplicado = duplicar(10);
const textoDuplicado = duplicar("hola");
