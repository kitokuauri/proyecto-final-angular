import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  convertirDesdeJson(json: string): any {
    try {
      return JSON.parse(json);
    } catch (error) {
      console.error('Error al convertir desde JSON:', error);
      return null;
    }
  }

  convertirGesotresAJson(gestores: any[]): string {
    try {
      return JSON.stringify(gestores) || '';
    } catch (error) {
      console.error('Error al convertir a JSON:', error);
      return '';
    }
  }

  
}
