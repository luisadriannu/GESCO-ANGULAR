import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import {} from '@angular/core';
@Component({
  selector: 'app-secret-particular',
  templateUrl: './secret-particular.component.html',
  styleUrls: ['./secret-particular.component.css'],
})
export class SecretParticularComponent implements OnInit {
  almacenar = true;

  ocultar() {
    this.almacenar = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
