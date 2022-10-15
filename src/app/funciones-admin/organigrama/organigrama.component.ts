import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.css'],
})
export class OrganigramaComponent implements OnInit {
  editUsuario = false;
  editarUsuario() {
    this.editUsuario = true;
  }
  cerrar() {
    this.editUsuario = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
