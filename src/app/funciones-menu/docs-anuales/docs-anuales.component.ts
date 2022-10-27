import { Router, TitleStrategy } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-anuales',
  templateUrl: './docs-anuales.component.html',
  styleUrls: ['./docs-anuales.component.css'],
})
export class DocsAnualesComponent implements OnInit {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['verDocs']);
  }

  ngOnInit(): void {}
}
