import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-particular',
  templateUrl: './secret-particular.component.html',
  styleUrls: ['./secret-particular.component.css'],
})
export class SecretParticularComponent implements OnInit {
  mostrarInicio = true;
  mostrarTurnar = false;
  mostrarGenerar = false;
  mostrarVerDocs = false;
  mostrarInfo = false;
  mostrarDocsAnuales = false;

  // Funciones menu
  menuInicio() {
    this.mostrarInicio = true;
    this.mostrarTurnar = false;
    this.mostrarGenerar = false;
    this.mostrarVerDocs = false;
    this.mostrarInfo = false;
    this.mostrarDocsAnuales = false;
  }

  menuTurnar() {
    this.mostrarInicio = false;
    this.mostrarTurnar = true;
    this.mostrarGenerar = false;
    this.mostrarVerDocs = false;
    this.mostrarInfo = false;
    this.mostrarDocsAnuales = false;
  }

  menuGenerar() {
    this.mostrarInicio = false;
    this.mostrarTurnar = false;
    this.mostrarGenerar = true;
    this.mostrarVerDocs = false;
    this.mostrarInfo = false;
    this.mostrarDocsAnuales = false;
  }

  menuVerDocs() {
    this.mostrarInicio = false;
    this.mostrarTurnar = false;
    this.mostrarGenerar = false;
    this.mostrarVerDocs = true;
    this.mostrarInfo = false;
    this.mostrarDocsAnuales = false;
  }

  verInfo() {
    this.mostrarInicio = false;
    this.mostrarTurnar = false;
    this.mostrarGenerar = false;
    this.mostrarVerDocs = false;
    this.mostrarInfo = true;
    this.mostrarDocsAnuales = false;
  }

  verDocsA() {
    this.mostrarInicio = false;
    this.mostrarTurnar = false;
    this.mostrarGenerar = false;
    this.mostrarVerDocs = false;
    this.mostrarInfo = false;
    this.mostrarDocsAnuales = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
