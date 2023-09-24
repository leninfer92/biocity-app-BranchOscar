import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { CombustibleService } from 'src/app/services/Combustible.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  countCars!: number;
  countOrders!: number;

  constructor(
    private vehiculoService: VehiculosService,
    private combustibleService: CombustibleService
  ) {
    this.countCars = 0;
    this.countOrders = 0;
  }

  ngOnInit(): void {
    this.allcountCars();
  }

  allcountCars() {
    this.vehiculoService.getAllVehicles().subscribe({
      next: (data: any) => {
        this.countCars = data.data.length;
      },
      error: (error) => {
      },
      complete: () => {
      },
    });
  }

  allcountOrders() {
    this.combustibleService.getAllOrders().subscribe({
      next: (data: any) => {
        this.countOrders = data.data.length;
      },
      error: (error) => {;
      },
      complete: () => {
      },
    });
  }
}
