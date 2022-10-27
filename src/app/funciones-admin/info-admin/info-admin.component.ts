import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-admin',
  templateUrl: './info-admin.component.html',
  styleUrls: ['./info-admin.component.css'],
})
export class InfoAdminComponent implements OnInit {
  deshabilitado = true;
  password = true;
  eye = `<i class="fa-solid fa-eye"></i>`;

  mostrarPass() {
    if (this.password) {
      this.password = false;
      this.eye = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
      this.password = true;
      this.eye = `<i class="fa-solid fa-eye"></i>`;
    }
    // this.password = !this.password;
  }
  constructor() {}

  ngOnInit(): void {}
}
