export class Gestor {
    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public email: string,
        public salario: number
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.salario = salario;
    }
}