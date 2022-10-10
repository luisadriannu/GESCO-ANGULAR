import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  mostrarInicio = true;
  mostrarSecret = false;
  mostrarSubsecre = false;
  mostrarDirec = false;
  mostrarSubdirec = false;
  mostrarDeptos = false;
  mostrarInfo = false;

  mostrarSecretReg = false;

  registroSecret() {
    this.mostrarInicio = false;
    this.mostrarSecretReg = true;
  }

  menuInicio() {
    this.mostrarInicio = true;
    this.mostrarSecret = false;
    this.mostrarSubsecre = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDeptos = false;
    this.mostrarInfo = false;

    this.mostrarSecretReg = false;
  }
  menuDeptos() {
    this.mostrarInicio = false;
    this.mostrarSecret = true;
    this.mostrarSubsecre = true;
    this.mostrarDirec = true;
    this.mostrarSubdirec = true;
    this.mostrarDeptos = true;
    this.mostrarInfo = false;
  }
  menuInfo() {
    this.mostrarInicio = false;
    this.mostrarSecret = false;
    this.mostrarSubsecre = false;
    this.mostrarDirec = false;
    this.mostrarSubdirec = false;
    this.mostrarDeptos = false;
    this.mostrarInfo = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
