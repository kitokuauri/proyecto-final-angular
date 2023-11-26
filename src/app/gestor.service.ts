import { Injectable } from '@angular/core';
import { Gestor } from './gestor/gestor.model';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private gestores: Gestor[] = [
    new Gestor("Francisco", "Vázquez", 55, "francisco.gestor@gmail.com", 2479),
    new Gestor("Sandra", "Cieza", 36, "sandra.gestor@gmail.com", 2479),
    new Gestor("Helena", "Marín", 57, "helena.gestor@gmail.com", 2653),
  ];

  getGestores(): Gestor[] {
    return this.gestores;
  }
  
  
}
