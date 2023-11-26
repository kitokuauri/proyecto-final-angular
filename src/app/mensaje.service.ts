import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensajes: Mensaje[] = [
    new Mensaje("24/04/2023", "Maria Luisa Sánchez", "Jordi Marín", "Te quiero mucho hijo ❤️"),
    new Mensaje("13/11/2023", "Auri Suárez", "Ander CV", "Limpia bien, esperancita"),
    new Mensaje("07/03/2023", "Jordi Marín", "Auri Suárez", "¡Feliz Cumpleaños sobrina!" )
  ];

  getMensajes(): Mensaje[] {
    return this.mensajes;
  }

}
