import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretParticularComponent } from './usuario/secret-particular.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InicioComponent } from './funciones-menu/inicio/inicio.component';
import { TurnarComponent } from './funciones-menu/turnar/turnar.component';
import { GenerarDocComponent } from './funciones-menu/generar-doc/generar-doc.component';
import { VerDocsComponent } from './funciones-menu/ver-docs/ver-docs.component';
import { InfoComponent } from './funciones-menu/info/info.component';
import { InicioAdminComponent } from './funciones-admin/inicio-admin/inicio-admin.component';
import { OrganigramaComponent } from './funciones-admin/organigrama/organigrama.component';
import { InfoAdminComponent } from './funciones-admin/info-admin/info-admin.component';
import { LoginComponent } from './login/login.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { RegistroSecretComponent } from './funciones-admin/registro/registro-secret/registro-secret.component';
import { RegistroSubsecretComponent } from './funciones-admin/registro/registro-subsecret/registro-subsecret.component';
import { RegistroDirecComponent } from './funciones-admin/registro/registro-direc/registro-direc.component';
import { RegistroSubdirecComponent } from './funciones-admin/registro/registro-subdirec/registro-subdirec.component';
import { RegistroDeptoComponent } from './funciones-admin/registro/registro-depto/registro-depto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsAnualesComponent } from './funciones-menu/docs-anuales/docs-anuales.component';

// Se usan para agregar caracteristicas extra 
@NgModule({
  declarations: [
    AppComponent,
    SecretParticularComponent,
    AdministradorComponent,
    InicioComponent,
    TurnarComponent,
    GenerarDocComponent,
    VerDocsComponent,
    InfoComponent,
    InicioAdminComponent,
    OrganigramaComponent,
    InfoAdminComponent,
    LoginComponent,
    ErrorPersonalizadoComponent,
    RegistroSecretComponent,
    RegistroSubsecretComponent,
    RegistroDirecComponent,
    RegistroSubdirecComponent,
    RegistroDeptoComponent,
    DocsAnualesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
