import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasFormComponent } from './componets/areas-form/areas-form.component';
import { UsuariosFormComponent } from './componets/usuarios-form/usuarios-form.component';
import { OperationsComponent } from './componets/operations/operations.component';
import { OperUserComponent } from './componets/oper-user/oper-user.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';


const routes: Routes = [
  //  {path: '/', redirectTo: '/home', pathMatch: 'full' },
  { path: 'areas', component: AreasFormComponent },
  { path: 'areas/add', component: OperationsComponent },
  { path: 'areas/edit/:codigo', component: OperationsComponent },
  { path: 'usuarios', component: UsuariosFormComponent },
  { path: 'usuarios/add', component: OperUserComponent },
  { path: 'usuarios/edit/:id', component: OperUserComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
