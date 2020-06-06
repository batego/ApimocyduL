import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { AreasFormComponent } from './componets/areas-form/areas-form.component';
import { UsuariosFormComponent } from './componets/usuarios-form/usuarios-form.component';
import { AreasService } from './services/Areas.service';
import { OperationsComponent } from './componets/operations/operations.component';
import { OperUserComponent } from './componets/oper-user/oper-user.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AreasFormComponent,
    UsuariosFormComponent,
    OperationsComponent,
    OperUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AreasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
