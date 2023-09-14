import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ErrorComponent } from './components/error/error.component';
import { ChoferComponent } from './components/chofer/chofer.component';
import { KilometrajeComponent } from './components/kilometraje/kilometraje.component';
import { CombustibleComponent } from './components/combustible/combustible.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ValidarCombustibleComponent } from './components/validar-combustible/validar-combustible.component';
import { EstadoVehiculoComponent } from './components/estado-vehiculo/estado-vehiculo.component';
import { ReporteKilometrajeComponent } from './components/reporte-kilometraje/reporte-kilometraje.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VehiculosService } from './services/vehiculos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegadorComponent,
    CabeceraComponent,
    PieComponent,
    UsuarioComponent,
    VehiculoComponent,
    ErrorComponent,
    ChoferComponent,
    KilometrajeComponent,
    CombustibleComponent,
    AdministradorComponent,
    ValidarCombustibleComponent,
    EstadoVehiculoComponent,
    ReporteKilometrajeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
