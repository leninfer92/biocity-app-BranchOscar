import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AdministradorComponent } from "./components/administrador/administrador.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { VehiculoComponent } from "./components/vehiculo/vehiculo.component";
import { ErrorComponent } from "./components/error/error.component";
import { ChoferComponent } from "./components/chofer/chofer.component";
import { KilometrajeComponent } from "./components/kilometraje/kilometraje.component";
import { CombustibleComponent } from "./components/combustible/combustible.component";
import { ValidarCombustibleComponent } from "./components/validar-combustible/validar-combustible.component";
import { ReporteKilometrajeComponent } from "./components/reporte-kilometraje/reporte-kilometraje.component";
import { EstadoVehiculoComponent } from "./components/estado-vehiculo/estado-vehiculo.component";
const appRoutes:Routes=[
    {path: '', component: ChoferComponent},
    {path: 'chofer', component: ChoferComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'vehiculo', component: VehiculoComponent},
    {path: 'kilometraje', component: KilometrajeComponent},
    {path: 'combustible', component: CombustibleComponent},
    {path: 'validar-combustible', component: ValidarCombustibleComponent},
    {path: 'reporte-kilometraje', component: ReporteKilometrajeComponent},
    {path: 'estado-vehiculo', component: EstadoVehiculoComponent},
    {path: 'administrador', component: AdministradorComponent},
    {path: '**', component: ErrorComponent},
];

export const routing: ModuleWithProviders<Object>=RouterModule.forRoot(appRoutes);