import { Component } from '@angular/core';
import { activitiesInfo } from '../reporte-kilometraje/reporte-kilometraje.component';
import { ActividadesService } from 'src/app/services/Actividades.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

export interface carsInfo {
  id: number;
  numero: string;
  chasis: string;
  placa: string;
  anio: string;
  fecha_compra: string;
  modelo: string;
  tipo_vehiculo: string;
}

@Component({
  selector: 'app-kilometraje',
  templateUrl: './kilometraje.component.html',
  styleUrls: ['./kilometraje.component.css']
})
export class KilometrajeComponent {
  carsList!: carsInfo[];
  activitiesList!: activitiesInfo[];
  updateKilometraje!: any;

  constructor(private activitiesService: ActividadesService,
    private vehiculoService: VehiculosService) {
    this.activitiesList = [];
    this.updateKilometraje = {
      id: null,
      fecha_hora: '',
      numero: '',
      placa: '',
      kilometraje_inicio: '',
      detalle_inicio: '',
      kilometraje_fin: '',
      detalle_fin: '',
    };
    this.allCars();
  }

  ngOnInit(): void {
    this.allActivities();
  }

  allCars(): void {
    this.vehiculoService.getAllVehicles().subscribe({
      next: (data: any) => {
        this.carsList = data.data;
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
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

  setModal(): void {
    this.updateKilometraje = {
      id: null,
      fecha_hora: '',
      numero: '',
      placa: '',
      kilometraje_inicio: '',
      detalle_inicio: '',
      kilometraje_fin: '',
      detalle_fin: '',
    };
  }

  createKilometraje(): void {
    this.activitiesService.createActivity(this.updateKilometraje.id,
      this.updateKilometraje.kilometraje_inicio,
      this.updateKilometraje.estado_inicio).subscribe({
      next: (data: any) => {
        this.updateKilometraje = {
          id: null,
          fecha_hora: '',
          numero: '',
          placa: '',
          kilometraje_inicio: '',
          detalle_inicio: '',
          kilometraje_fin: '',
          detalle_fin: '',
        };
        this.allActivities();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  showModal(data: any): void {
    this.updateKilometraje = { ...data };
  }

  updateActivity(): void {
    this.activitiesService.updateActivity(this.updateKilometraje.id,
      this.updateKilometraje.estado_fin,
      this.updateKilometraje.kilometraje_fin).subscribe({
      next: (data: any) => {
        this.allActivities();
        this.updateKilometraje = {
          id: null,
          fecha_hora: '',
          numero: '',
          placa: '',
          kilometraje_inicio: '',
          detalle_inicio: '',
          kilometraje_fin: '',
          detalle_fin: '',
        };
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  deleteActivity(id: number): void {
    this.activitiesService.deleteActivity(id).subscribe({
      next: (data: any) => {
        this.allActivities();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }
}
