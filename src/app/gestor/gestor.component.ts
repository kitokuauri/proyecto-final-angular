import { Component, OnInit, OnDestroy } from '@angular/core';
import { GestorService } from '../gestor.service';
import { Gestor } from './gestor.model';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConversionService } from '../conversion-json.service';


@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})

export class GestorComponent implements OnInit, OnDestroy {

  gestores: Gestor[] = [];
  gestoresMostrados: Gestor[] = [];

  private intervalSubscription: Subscription | undefined;
  public gestorIndex = 0;

  gestoresJson: string='';
  mostrarConvertidos=false;

  constructor(private gestorService: GestorService, private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.gestores = this.gestorService.getGestores();
    this.misGestores();
    }

    ngOnDestroy(): void {
      if (this.intervalSubscription) {
        this.intervalSubscription.unsubscribe();
      }
    }
  
    private misGestores(): void {
      this.intervalSubscription = interval(5000)
        .pipe(take(this.gestores.length)) //imaginemos que pudieramos añadir gestores
        .subscribe(() => {
          this.mostrarGestor();
        });
    }
    private mostrarGestor(): void {
      if (this.gestorIndex < this.gestores.length) {
        this.gestoresMostrados.push(this.gestores[this.gestorIndex]);
        this.gestorIndex++;
      }
    }

    convertirDesdeJson(): void {
      if (this.gestoresJson) {
        const arrayGest: Gestor[] = this.conversionService.convertirDesdeJson(this.gestoresJson);
        this.gestoresMostrados = arrayGest;
        this.mostrarConvertidos = true;
      }
    }

    convertirGestoresAJson(): void {
      if (this.gestoresMostrados.length > 0) {
        this.gestoresJson = this.conversionService.convertirGesotresAJson(this.gestoresMostrados);
      }
    }

    ocultarConvertidos(): void {
      this.mostrarConvertidos = false;
    }

}

