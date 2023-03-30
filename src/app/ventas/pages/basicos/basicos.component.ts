import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'cesar'
  nombreUpper: string = 'CESAR'
  nombreCompleto: string = 'cEsaR feRRandEz'

  fecha: Date = new Date();

}
