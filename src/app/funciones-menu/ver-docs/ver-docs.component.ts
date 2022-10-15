import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-docs',
  templateUrl: './ver-docs.component.html',
  styleUrls: ['./ver-docs.component.css'],
})
export class VerDocsComponent implements OnInit {
  mostrarDocsAnuales = false;
  mostrarDocs = true;
  editarDocs = false;
  // button exportar
  deshabilitado = true;

  mostrarDocsA() {
    this.mostrarDocsAnuales = true;
    this.mostrarDocs = false;
  }
  editar() {
    this.editarDocs = true;
  }
  cerrar() {
    this.editarDocs = false;
  }
  // funcion exportar
  exportar() {
    confirm('¿Estas seguro que deseas exportar?');
  }

  constructor() {}

  ngOnInit(): void {}
}
