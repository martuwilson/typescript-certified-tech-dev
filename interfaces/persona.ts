export interface Persona{
    nombre: string;
    edad: number;
    direccion?:Direccion; // ? significa que es opcional
}

export interface Direccion{
    calle: string;
    numero: number;
    localidad: string;
}