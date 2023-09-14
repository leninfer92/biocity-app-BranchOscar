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
    console.log('Into ngOnInit');
    this.allActivities();
  }

  allActivities(): void {
    console.log('Into allCars');
    this.activitiesService.getAllActivities().subscribe({
      next: (data: any) => {
        console.log('La data que tengo es: ', data)
        this.activitiesList = data.data;
        this.activitiesList.forEach((activity) => {
          activity.created_at = this.formatDate(activity.created_at);
        });
        console.log(this.activitiesList);
      },
      error: (error) => {
        console.error('Error al listar las actividades', error);
      },
      complete: () => {
        console.log('La subscripción se ha completado.');
      },
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
