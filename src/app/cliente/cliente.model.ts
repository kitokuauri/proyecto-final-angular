export class Cliente {
    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public email: string,
        public presupuesto: number
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.presupuesto = presupuesto;
    }
}