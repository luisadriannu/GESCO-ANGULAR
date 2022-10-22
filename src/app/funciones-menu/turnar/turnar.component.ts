import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-turnar',
  templateUrl: './turnar.component.html',
  styleUrls: ['./turnar.component.css'],
})
export class TurnarComponent implements OnInit {
  // @ViewChild('secretarias') $secret: ElementRef;
  mostrar = false;
  mostrarSecret = false;
  mostrarSubsecret = false;
  mostrarDirec = false;
  mostrarSubdirec = false;
  mostrarDeptos = false;
  texto = '(Seleccione un departamento)';
  complemento = '';
  mostrarSecretSelect() {
    this.mostrarSecret = true;
    this.texto = 'Secretaría';
    this.complemento = 'a la que se turnará:';
  }
  mostrarSubsecretSelect() {
    this.mostrarSubsecret = true;
    this.texto = 'Subsecretaría';
    this.complemento = 'a la que se turnará:';
  }
  mostrarDirecSelect() {
    this.mostrarDirec = true;
    this.texto = 'Dirección';
    this.complemento = 'a la que se turnará:';
  }
  mostrarSubdirecSelect() {
    this.mostrarSubdirec = true;
    this.texto = 'Subdirección';
    this.complemento = 'a la que se turnará:';
  }
  mostrarDeptoSelect() {
    this.mostrarDeptos = true;
    this.texto = 'Departamento';
    this.complemento = 'al que se turnará:';
  }
  selectOption() {
    this.mostrar = true;
  }
  constructor() {}

  ngOnInit(): void {
    const d = document,
      $secret = d.getElementById('secret'),
      $subsecret = d.getElementById('subsecret'),
      $direc = d.getElementById('direc'),
      $subdirec = d.getElementById('subdirec'),
      $depto = d.getElementById('depto');
    d.addEventListener('change', (e) => {
      if (e.target === $secret) {
        $subsecret?.setAttribute('disabled', 'true');
        $direc?.setAttribute('disabled', 'true');
        $subdirec?.setAttribute('disabled', 'true');
        $depto?.setAttribute('disabled', 'true');
      }
      if (e.target === $subsecret) {
        $secret?.setAttribute('disabled', 'true');
        $direc?.setAttribute('disabled', 'true');
        $subdirec?.setAttribute('disabled', 'true');
        $depto?.setAttribute('disabled', 'true');
      }
      if (e.target === $direc) {
        $subsecret?.setAttribute('disabled', 'true');
        $secret?.setAttribute('disabled', 'true');
        $subdirec?.setAttribute('disabled', 'true');
        $depto?.setAttribute('disabled', 'true');
      }
      if (e.target === $subdirec) {
        $subsecret?.setAttribute('disabled', 'true');
        $secret?.setAttribute('disabled', 'true');
        $direc?.setAttribute('disabled', 'true');
        $depto?.setAttribute('disabled', 'true');
      }
      if (e.target === $depto) {
        $subsecret?.setAttribute('disabled', 'true');
        $secret?.setAttribute('disabled', 'true');
        $direc?.setAttribute('disabled', 'true');
        $subdirec?.setAttribute('disabled', 'true');
      }
    });
  }
}
