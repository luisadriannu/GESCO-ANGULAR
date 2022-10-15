import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css'],
})
export class InicioAdminComponent implements OnInit {
  registro = false;

  registrar() {
    this.registro = true;
  }
  cerrar() {
    this.registro = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
