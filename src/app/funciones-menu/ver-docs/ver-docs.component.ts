import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-docs',
  templateUrl: './ver-docs.component.html',
  styleUrls: ['./ver-docs.component.css'],
  animations: [
    trigger('animacionRegistro', [
      state(
        'estado1',
        style({
          backgroundColor: 'red',
        })
      ),
      state(
        'estado2',
        style({
          backgroundColor: 'blue',
        })
      ),
      transition('estado1 <=> estado2', animate(1000)),
    ]),
  ],
})
export class VerDocsComponent implements OnInit {
  mostrarDocsAnuales = false;
  mostrarDocs = true;
  editarDocs = false;
  // button exportar
  deshabilitado = true;
  estadoCuadro = 'estado1';

  mostrarDocsA() {
    this.mostrarDocsAnuales = true;
    this.mostrarDocs = false;
  }
  editar() {
    this.editarDocs = true;
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }
  cerrar() {
    this.editarDocs = false;
  }
  // funcion exportar
  exportar() {
    if (confirm('¿Estas seguro que deseas exportar?')) {
    } else {
      alert('Se ha cancelado la exportacion');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
