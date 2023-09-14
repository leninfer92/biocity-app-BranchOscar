import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/Actividades.service';

export interface activitiesInfo {
  id: number;
  created_at: string;
  vehiculo_id: number;
  kilometraje_inicio: number;
  estado_inicio: string;
  kilometraje_fin: number;
  estado_fin: string;
}

@Component({
  selector: 'app-reporte-kilometraje',
  templateUrl: './reporte-kilometraje.component.html',
  styleUrls: ['./reporte-kilometraje.component.css'],
})
export class ReporteKilometrajeComponent implements OnInit {
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
