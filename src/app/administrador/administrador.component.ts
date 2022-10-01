import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  mostrarInicio = true;
  mostrarSecre = false;
  mostrarSubsecr = false;
  mostrarDirec = false;
  mostrarSubdirec = false;
  mostrarDepto = false;
  mostrarInfo = false;

  menuInicio() {
    this.mostrarInicio = true;
    this.mostrarSecre = false;
    this.mostrarSubsecr = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDepto = false;
    this.mostrarInfo = false;
  }
  menuSecre() {
    this.mostrarInicio = false;
    this.mostrarSecre = true;
    this.mostrarSubsecr = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDepto = false;
    this.mostrarInfo = false;
  }
  menuSubsecr() {
    this.mostrarInicio = false;
    this.mostrarSecre = false;
    this.mostrarSubsecr = true;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDepto = false;
    this.mostrarInfo = false;
  }
  menuDirec() {
    this.mostrarInicio = false;
    this.mostrarSecre = false;
    this.mostrarSubsecr = false;
    this.mostrarDirec = true;
    this.mostrarSubdirec = false;
    this.mostrarDepto = false;
    this.mostrarInfo = false;
  }
  menuSubdirec() {
    this.mostrarInicio = false;
    this.mostrarSecre = false;
    this.mostrarSubsecr = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = true;
    this.mostrarDepto = false;
    this.mostrarInfo = false;
  }
  menuDepto() {
    this.mostrarInicio = false;
    this.mostrarSecre = false;
    this.mostrarSubsecr = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDepto = true;
    this.mostrarInfo = false;
  }
  menuInfo() {
    this.mostrarInicio = false;
    this.mostrarSecre = false;
    this.mostrarSubsecr = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDepto = false;
    this.mostrarInfo = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
