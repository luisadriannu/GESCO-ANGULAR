import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAdminComponent } from './funciones-admin/info-admin/info-admin.component';
import { InicioAdminComponent } from './funciones-admin/inicio-admin/inicio-admin.component';
import { OrganigramaComponent } from './funciones-admin/organigrama/organigrama.component';
import { GenerarDocComponent } from './funciones-menu/generar-doc/generar-doc.component';
import { InfoComponent } from './funciones-menu/info/info.component';
import { InicioComponent } from './funciones-menu/inicio/inicio.component';
import { TurnarComponent } from './funciones-menu/turnar/turnar.component';
import { VerDocsComponent } from './funciones-menu/ver-docs/ver-docs.component';
import { LoginComponent } from './login/login.component';
import { RegistroSecretComponent } from './funciones-admin/registro/registro-secret/registro-secret.component';
import { RegistroSubsecretComponent } from './funciones-admin/registro/registro-subsecret/registro-subsecret.component';
import { RegistroDirecComponent } from './funciones-admin/registro/registro-direc/registro-direc.component';
import { RegistroSubdirecComponent } from './funciones-admin/registro/registro-subdirec/registro-subdirec.component';
import { RegistroDeptoComponent } from './funciones-admin/registro/registro-depto/registro-depto.component';
import { DocsAnualesComponent } from './funciones-menu/docs-anuales/docs-anuales.component';

const routes: Routes = [
  // USUARIOS
  { path: 'login', component: LoginComponent },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  { path: 'turnar', component: TurnarComponent },
  { path: 'generarDoc', component: GenerarDocComponent },
  { path: 'verDocs', component: VerDocsComponent },
  { path: 'info/usuario', component: InfoComponent },
  { path: 'docsAnuales', component: DocsAnualesComponent },
  // ADMIN
  { path: 'inicio/admin/registro-secret', component: RegistroSecretComponent },
  {
    path: 'inicio/admin/registro-subsecret',
    component: RegistroSubsecretComponent,
  },
  {
    path: 'inicio/admin/registro-direc',
    component: RegistroDirecComponent,
  },
  {
    path: 'inicio/admin/registro-subdirec',
    component: RegistroSubdirecComponent,
  },
  {
    path: 'inicio/admin/registro-depto',
    component: RegistroDeptoComponent,
  },
  {
    path: 'inicio/admin',
    component: InicioAdminComponent,
  },
  { path: 'admin/organigrama', component: OrganigramaComponent },
  { path: 'info/admin', component: InfoAdminComponent },
  // Pagina error
  { path: '**', component: ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
