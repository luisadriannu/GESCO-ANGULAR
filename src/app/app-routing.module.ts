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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio-users' },
  {
    path: 'inicio-users',
    component: InicioComponent,
  },
  { path: 'turnar', component: TurnarComponent },
  { path: 'generar', component: GenerarDocComponent },
  { path: 'verDocs', component: VerDocsComponent },
  { path: 'info', component: InfoComponent },
  // ADMIN
  { path: 'inicio-admin', component: InicioAdminComponent },
  { path: 'organigrama', component: OrganigramaComponent },
  { path: 'info-admin', component: InfoAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
