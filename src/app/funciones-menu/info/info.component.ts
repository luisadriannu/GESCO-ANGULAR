import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  deshabilitado = true;
  password = true;
  eye = `<i class="fa-solid fa-eye"></i>`;
  habilitar() {
    this.deshabilitado = !this.deshabilitado;
  }

  mostrarPass() {
    if (this.password) {
      this.password = false;
      this.eye = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
      this.password = true;
      this.eye = `<i class="fa-solid fa-eye"></i>`;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
