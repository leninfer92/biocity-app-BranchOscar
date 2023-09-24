import { Component } from '@angular/core';
import { activitiesInfo } from '../reporte-kilometraje/reporte-kilometraje.component';
import { ActividadesService } from 'src/app/services/Actividades.service';

@Component({
  selector: 'app-estado-vehiculo',
  templateUrl: './estado-vehiculo.component.html',
  styleUrls: ['./estado-vehiculo.component.css']
})
export class EstadoVehiculoComponent {
  activitiesList!: activitiesInfo[];

  constructor(private activitiesService: ActividadesService) {
    this.activitiesList = [];
  }

  ngOnInit(): void {
    this.allActivities();
  }

  allActivities(): void {
    this.activitiesService.getAllActivities().subscribe({
      next: (data: any) => {
        this.activitiesList = data.data;
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

}
