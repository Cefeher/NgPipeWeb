import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Cesar';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona() {
    this.nombre = 'Laura';
    this.genero = 'femenino';
  }

  // i18nPlural

  clientes: string[] = ['maria', 'pedro', 'jorge', 'antonio', 'francisco'];
  clientesMapa = {
    '=0': 'Actuano tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.clientes.shift();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Cesar',
    edad: 32,
    direccion: 'Valencia, España'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });



}
