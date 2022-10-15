import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { SubdireccionComponent } from './subdireccion/subdireccion.component';
import { DireccionComponent } from './direccion/direccion.component';
import { SubsecretariaComponent } from './subsecretaria/subsecretaria.component';
import { SecretParticularComponent } from './secret-particular/secret-particular.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InicioComponent } from './funciones-menu/inicio/inicio.component';
import { TurnarComponent } from './funciones-menu/turnar/turnar.component';
import { GenerarDocComponent } from './funciones-menu/generar-doc/generar-doc.component';
import { VerDocsComponent } from './funciones-menu/ver-docs/ver-docs.component';
import { InfoComponent } from './funciones-menu/info/info.component';
import { InicioAdminComponent } from './funciones-admin/inicio-admin/inicio-admin.component';
import { OrganigramaComponent } from './funciones-admin/organigrama/organigrama.component';
import { InfoAdminComponent } from './funciones-admin/info-admin/info-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    SubdireccionComponent,
    DireccionComponent,
    SubsecretariaComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
