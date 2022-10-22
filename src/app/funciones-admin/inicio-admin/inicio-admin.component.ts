import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css'],
})
export class InicioAdminComponent implements OnInit {
  inicio = true;

  ocultar() {
    this.inicio = false
  }
  constructor() {}

  ngOnInit(): void {}
}
