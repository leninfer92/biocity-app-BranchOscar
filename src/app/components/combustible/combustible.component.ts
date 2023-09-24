import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { CombustibleService } from 'src/app/services/Combustible.service';

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

export interface ordersInfo {
  id: number;
  numero: string;
  placa: string;
  kilometraje: string;
  galon: string;
  tipo_combustible: number;
  vehiculo_id: number;
}

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.css']
})
export class CombustibleComponent implements OnInit{

  carsList!: carsInfo[];
  ordersList!: any[];
  updateOrder!: any;

  constructor(private vehiculoService: VehiculosService,
    private combustibleService: CombustibleService) {
    this.carsList = [];
    this.ordersList = [];
    this.updateOrder = {
      id: 0,
      fecha: '',
      numero: '',
      placa: '',
      km_carga: '',
      galones: '',
      tipo: '',
    };
    this.updateOrder.id = null
  }

  ngOnInit(): void {
    this.allOrders();
    this.allCars();
  }

  // Listar los vehiculos disponibles
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

  // Listar las ordenes de combustible
  allOrders(): void {
    this.combustibleService.getAllOrders().subscribe({
      next: (data: any) => {
        this.ordersList = data.data;
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  createOrder(): void {
    this.combustibleService.createOrder(this.updateOrder.id, this.updateOrder.km_carga).subscribe({
      next: (data: any) => {
        this.updateOrder = {
          id: null,
          fecha: '',
          numero: '',
          placa: '',
          km_carga: '',
          galones: '',
          tipo: '',
        };
        this.allOrders();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  createOrderAditional(): void {
    this.combustibleService.createOrderAditional(this.updateOrder.id, this.updateOrder.tipo, this.updateOrder.galones).subscribe({
      next: (data: any) => {
        this.updateOrder = {
          id: null,
          fecha: '',
          numero: '',
          placa: '',
          km_carga: '',
          galones: '',
          tipo: '',
        };
        this.allOrders();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  setModal(): void {
    this.updateOrder = {
      id: null,
      fecha: '',
      numero: '',
      placa: '',
      km_carga: '',
      galones: '',
      tipo: '',
    };
  }

  deleteOrder(id: number): void {
    this.combustibleService.deleteOrderById(id).subscribe({
      next: (data: any) => {
        this.allOrders();
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

}
