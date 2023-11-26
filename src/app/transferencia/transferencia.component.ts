import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from './transferencia.model';
import { ConversionService } from '../conversion-json.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})

export class TransferenciaComponent implements OnInit {

  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.getTransferencias();
  }
}

