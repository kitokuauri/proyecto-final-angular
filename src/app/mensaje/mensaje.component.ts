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

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    this.mensajes = this.mensajeService.getMensajes();
  }

}

