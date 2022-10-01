import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { LoginComponent } from './login/login.component';
import { SubdireccionComponent } from './subdireccion/subdireccion.component';
import { DireccionComponent } from './direccion/direccion.component';
import { SubsecretariaComponent } from './subsecretaria/subsecretaria.component';
import { SecretParticularComponent } from './secret-particular/secret-particular.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [AppComponent, DepartamentosComponent, LoginComponent, SubdireccionComponent, DireccionComponent, SubsecretariaComponent, SecretParticularComponent, AdministradorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
