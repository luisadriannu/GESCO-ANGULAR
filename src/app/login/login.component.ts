import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  time = '';
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
  }
  constructor(private elementRef: ElementRef) {}

  // Esta funcion se ejecuta una vez que cargue el componente
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#f8f8f8';
    const timeDays = new Date(),
      hour = timeDays.getHours();
    if (hour >= 0 && hour < 12) {
      this.time = 'Buenos días⛅';
    }
    if (hour >= 12 && hour < 18) {
      this.time = 'Buenas tardes☀️';
    }
    if (hour >= 18 && hour < 24) {
      this.time = 'Buenas noches🌙';
      // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      //   'black';
      // this.elementRef.nativeElement.ownerDocument.body.style.color = 'white';
    }
  }

  ngOnInit(): void {}
}
