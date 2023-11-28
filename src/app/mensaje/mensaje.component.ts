import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';
import { Mensaje } from './mensaje.model';

import { ConversionService } from '../conversion-json.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  
  mensajes: Mensaje[] = [];

  mensJson: string='';
  mostrarConvertidosAJson=false;
  mostrarConvertidosDesdeJson=false;

  constructor(private mensajeService: MensajeService, private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.mensajes = this.mensajeService.getMensajes();
  }

  convertirDesdeJson(): void {
    if (this.mensJson) {
      const arrayGest: Mensaje[] = this.conversionService.convertirDesdeJson(this.mensJson);
      this.mensajes = arrayGest;
      this.mostrarConvertidosDesdeJson = true;
    }
  }

  convertirMensajesAJson(): void {
    if (this.mensajes.length > 0) {
      this.mensJson = this.conversionService.convertirMensajesAJson(this.mensajes);
      this.mostrarConvertidosAJson=true;
    }
  }

  ocultarConvertidos(): void {
    this.mostrarConvertidosAJson=false;
    this.mostrarConvertidosDesdeJson = false;
  }

  ocultarConvertidosDesdeJson(): void {
    this.mostrarConvertidosDesdeJson = false;
  }

}

