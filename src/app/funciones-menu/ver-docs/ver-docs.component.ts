import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-docs',
  templateUrl: './ver-docs.component.html',
  styleUrls: ['./ver-docs.component.css'],
})
export class VerDocsComponent implements OnInit {
  editarDocs = false;
  // button exportar
  deshabilitado = true;

  constructor(private router: Router, private elementRef: ElementRef) {}
  docsAnuales() {
    this.router.navigate(['docsAnuales']);
  }

  editar() {
    this.editarDocs = true;
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

  ngOnInit(): void {}
}
