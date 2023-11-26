export class Mensaje {
    constructor(
        public fecha: string,
        public remitente: string,
        public destinatario: string,
        public mensaje: string,
    ) {
        this.fecha = fecha;
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
}