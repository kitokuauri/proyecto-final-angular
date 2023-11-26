import { Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [
    new Cliente("Maria Luisa", "Sánchez", 80, "marialuisa.cliente@gmail.com", 300),
    new Cliente("Auri","Suárez", 24, "auri.cliente@gmail.com", 2000),
    new Cliente("Jordi", "Marín", 57, "jordi.cliente@gmail.com", 10500)
  ]

  getClientes(): Cliente[]{
    return this.clientes;
  }
}
