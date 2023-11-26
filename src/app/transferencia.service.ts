import { Injectable } from '@angular/core';
import { Transferencia } from './transferencia/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferencias: Transferencia[] = [
    new Transferencia("24/04/2023", "Maria Luisa Sánchez", "Jordi Marín", 70),
    new Transferencia("13/11/2023", "Auri Suárez", "Ander CV", 12.5),
    new Transferencia("07/03/2023", "Jordi Marín", "Auri Suárez", 50)
    
  ];

  getTransferencias(): Transferencia[]{
    return this.transferencias;
  }
}
