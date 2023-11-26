export class Transferencia {
    constructor(
        public fecha: string,
        public remitente: string,
        public destinatario: string,
        public cantidad: number,
    ) {
        this.fecha = fecha;
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.cantidad = cantidad;
    }
}