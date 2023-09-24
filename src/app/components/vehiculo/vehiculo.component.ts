import { Component, OnInit } from '@angular/core';
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
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit {
  carsList!: carsInfo[];
  updateCarInfo!: carsInfo;
  editingCarInfo!: carsInfo;

  constructor(private vehiculoService: VehiculosService) {
    this.carsList = [];
    this.updateCarInfo = {
      id: 0,
      numero: '',
      chasis: '',
      placa: '',
      anio: '',
      fecha_compra: '',
      modelo: '',
      tipo_vehiculo: '',
    };
    this.editingCarInfo = this.updateCarInfo;
  }

  ngOnInit(): void {
    this.allCars();
  }

  allCars(): void {
    this.vehiculoService.getAllVehicles().subscribe({
      next: (data: any) => {
        this.carsList = data.data;
        this.editingCarInfo = {
          id: 0,
          numero: '',
          chasis: '',
          placa: '',
          anio: '',
          fecha_compra: '',
          modelo: '',
          tipo_vehiculo: 'Seleccione',
        };
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  deleteCar(id: number): void {
    this.vehiculoService.deleteVehicleById(id).subscribe({
      next: (data: any) => {
        this.allCars();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  updateCar(): void {
    this.updateCarInfo.id = this.editingCarInfo.id;
    this.updateCarInfo.numero = this.editingCarInfo.numero;
    this.updateCarInfo.chasis = this.editingCarInfo.chasis;
    this.updateCarInfo.placa = this.editingCarInfo.placa;
    this.updateCarInfo.anio = this.editingCarInfo.anio;
    this.updateCarInfo.fecha_compra = this.editingCarInfo.fecha_compra;
    this.updateCarInfo.modelo = this.editingCarInfo.modelo;
    this.updateCarInfo.tipo_vehiculo = this.editingCarInfo.tipo_vehiculo;
    const params = {
      id: this.updateCarInfo.id,
      numero: this.updateCarInfo.numero,
      chasis: this.updateCarInfo.chasis,
      placa: this.updateCarInfo.placa,
      anio: this.updateCarInfo.anio,
      fecha_compra: this.updateCarInfo.fecha_compra,
      modelo: this.updateCarInfo.modelo,
      tipo_vehiculo: this.updateCarInfo.tipo_vehiculo,
    };
    this.vehiculoService.updateVehicleById(params).subscribe({
      next: (data: any) => {
        this.allCars();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  showModal(data: carsInfo): void {
    this.editingCarInfo = { ...data };
  }

  showModalRegistrate(): void {
    this.editingCarInfo = {
      id: 0,
      numero: '',
      chasis: '',
      placa: '',
      anio: '',
      fecha_compra: '',
      modelo: '',
      tipo_vehiculo: 'Seleccione',
    };
  }

  createCar(): void {
    const params = {
      id: this.editingCarInfo.id,
      numero: this.editingCarInfo.numero,
      chasis: this.editingCarInfo.chasis,
      placa: this.editingCarInfo.placa,
      anio: this.editingCarInfo.anio,
      fecha_compra: this.editingCarInfo.fecha_compra,
      modelo: this.editingCarInfo.modelo,
      tipo_vehiculo: this.editingCarInfo.tipo_vehiculo,
    };
    this.vehiculoService.creteVehicule(params).subscribe({
      next: (data: any) => {
        this.allCars();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }
}
