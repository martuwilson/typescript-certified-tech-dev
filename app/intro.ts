import { Persona } from "../interfaces/persona";

let saludo = "saludo";

let nombre: string = "Martin";

let edad: number = 25;

let esMayor: boolean = true;

let colores: string[] = ["rojo", "verde", "azul"];
let colores2: Array<string> = ["rojo", "verde", "azul"];

enum DiasSemana{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let hoy:DiasSemana = DiasSemana.Lunes;


//funciones con tipos y parametros de retorno:

function saludar(nombre: string):string{ //string es el tipo de retorno

    return `Hola ${nombre}` // retorno que es string
}

console.log(saludar('Pablo'));

function saludar2(nombre: string):void{
    console.log(`Hola saludo2 ${nombre}`) 
}

saludar2("Martin");

// clases con propiedades y metodos tipeados:

class Producto{
    constructor(public nombre: string, public precio: number){} //public significa que se crea la propiedad y se asigna el valor en el constructor y se puede acceder desde fuera de la clase

    mostrarDetalles():void{
        console.log(`Producto: ${this.nombre} Precio: ${this.precio}`);
    }
}

type Color = "rojo" | "verde" | "azul";

//let colores:Color = "amarillo"; // da error porque no es un color valido en Color
let colors:Color = "rojo"; // es correcto



// uso de tipos genericos
function duplicar<T>(valor: T){
    return valor;
}

const numeroDuplicado:number = duplicar(10);

const textoDuplicado:string = duplicar("hola");

//interfaces

/* interface Persona{
    nombre: string;
    edad: number;
    direccion?:Direccion; // ? significa que es opcional
}

interface Direccion{
    calle: string;
    numero: number;
    localidad: string;
} */

const persona:Persona = {
    nombre: "Martin",
    edad: 25,
    direccion:{
        calle: "calle falsa",
        numero: 123,
        localidad: "Springfield"
    }
}


interface Animal {
    nombre: string;
    tipo: string;
}

interface Pajaro extends Animal{
    colorPlumaje: string;
}

const canario:Pajaro = {
    nombre: "Piolin",
    tipo: "canario",
    colorPlumaje: "amarillo"
}